import { IAuthBodyRequest } from './../interfaces/IAuthBodyRequest';
import AppError from "../errors/AppError";
import * as bcrypt from "bcryptjs";
import { BuscarUsuarioService } from "../services/buscarUsuario.service";
import { IAuthReponse } from "../interfaces/IAuthResponse";

export class AuthFacade {

    public static execute(body: IAuthBodyRequest): Promise<IAuthReponse>{
        return new Promise(async (resolve, reject) => {
            try {

                let buscarUsuarioService = new BuscarUsuarioService();

                let usuarioResponse = await buscarUsuarioService.execute(body.usuario);

                if(!usuarioResponse) {
                    throw new AppError({ message: 'Error no servidor.', statusCode: 500 });
                }

                const senhaCorreta = await bcrypt.compare(body.senha, usuarioResponse.senha);

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