import AppError from "../errors/AppError";
import { BuscarUsuarioRepository } from "../repositories/buscarUsuario.repository";

export class BuscarUsuarioService {

    constructor(){}

    async execute(usuario: string): Promise<any> {
        try {

            let repository = new BuscarUsuarioRepository();

            const existeUsuario = await repository.getByUsuario(usuario);

            if(!existeUsuario) {
                throw new AppError({ message: 'Usuário não encontrado.', statusCode: 404 });
            }
            
            return existeUsuario;

        } catch (error) {
            throw new AppError(error);
        }
    }
}
