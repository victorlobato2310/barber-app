import AppError from "../errors/AppError";
import { IBuscarEmailOuUsuarioResponse } from "../interfaces/IBuscarEmailOuUsuarioResponse";
import { BuscarEmailOuUsuarioRepository } from "../repositories/buscarEmailOuUsuario.repository";
import { Get, Route, Tags, SuccessResponse, Response, Query } from 'tsoa';
@Route("buscaEmailOuUsuario")
@Tags("Busca Email ou Usuário")
export class BuscarEmailOuUsuarioService {

    constructor(){}
    /**
     * Responsável por fazer a checagem se já existe usuário e/ou email na aplicação. 
     */
    @Get()
    @SuccessResponse("200", "OK")
    @Response<AppError>("500", "Error no servidor.")
    async execute(@Query() email: string = "", @Query() usuario: string = ""): Promise<IBuscarEmailOuUsuarioResponse> {
        try {
            
            let repository = new BuscarEmailOuUsuarioRepository();

            if(usuario != ""){
                
                const existeUsuario = await repository.getByUsuario(usuario);
                
                if(existeUsuario) {
                    return {
                        existeEmailOuUsuario: true
                    }                   
                }
            }

            if(email != ""){

                const existeEmail = await repository.getByEmail(email);
                
                if(existeEmail) {
                    return {
                        existeEmailOuUsuario: true
                    }                   
                }
            }

            return {
                existeEmailOuUsuario: false
            };

        } catch (error) {
            throw new AppError(error);
        }
    }
}
