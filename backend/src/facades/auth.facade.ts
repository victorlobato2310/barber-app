import AppError from "../errors/AppError";
import * as bcrypt from "bcryptjs";
import { BuscarUsuarioService } from "../services/buscarUsuario.service";

export class AuthFacade {

    public static execute(usuario: string, senha: string): Promise<any>{
        return new Promise(async (resolve, reject) => {
            try {

                let buscarUsuarioService = new BuscarUsuarioService();

                let usuarioResponse = await buscarUsuarioService.execute(usuario);

                if(!usuarioResponse) {
                    throw new AppError({ message: 'Error no servidor.', statusCode: 500 });
                }

                const senhaCorreta = await bcrypt.compare(senha, usuarioResponse.senha);

                if(!senhaCorreta){
                    throw new AppError({ message: 'Usuário ou senha incorretos.', statusCode: 400 });
                }
   
                return resolve({
                    statusCode: 204
                });

            } catch (error) {
                return reject(error);
            }
        });
    } 
}