import AppError from "../errors/AppError";
import { BuscarEmailOuUsuarioRepository } from "../repositories/buscarEmailOuUsuario.repository";

export class BuscarEmailOuUsuarioService {

    constructor(){}

    async execute(email: string = "", usuario: string = ""): Promise<any> {
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
