import AppError from "../errors/AppError";
import { CadastrarUsuarioService } from "../services/cadastrarUsuario.service";

export class CadastraUsuarioFacade {

    public static execute(usuario: string, senha: string): Promise<any>{
        return new Promise(async (resolve, reject) => {
            try {

                let cadastrarUsuarioService = new CadastrarUsuarioService();

                let response = await cadastrarUsuarioService.execute(usuario, senha);

                if(!response) {
                    throw new AppError({ message: 'Error no interno no servidor', statusCode: 500 });
                }

                return resolve(response);
            } catch (error) {
                return reject(error);
            }
        });
    } 
}