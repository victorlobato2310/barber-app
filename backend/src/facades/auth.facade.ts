import { IAuthBodyRequest } from './../interfaces/IAuthBodyRequest';
import AppError from "../errors/AppError";
import * as bcrypt from "bcryptjs";
import { BuscarUsuarioService } from "../services/buscarUsuario.service";
import { IAuthReponse } from "../interfaces/IAuthResponse";
import { Post, Route, Tags, Body, Response, SuccessResponse, Example } from 'tsoa';
@Route("auth")
@Tags("Autenticação")
export class AuthFacade {
    /**
     * Responsável por autenticar o usuário na aplicação. 
     */
    @Post()
    @SuccessResponse("204")
    @Response<AppError>("400", "Usuário ou senha incorretos.")
    @Response<AppError>("404", "Usuário não encontrado.")
    @Response<AppError>("500", "Error no servidor.")
    @Example<IAuthBodyRequest>({
        usuario: 'usuario123',
        senha: 'senha123'
    })
    public static execute(@Body() body: IAuthBodyRequest): Promise<IAuthReponse>{
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