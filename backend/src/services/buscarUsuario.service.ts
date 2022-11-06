import AppError from "../errors/AppError";
import { IConta } from "../interfaces/IConta";
import { BuscarUsuarioRepository } from "../repositories/buscarUsuario.repository";

export class BuscarUsuarioService {

    constructor(){}

    async execute(usuario: string): Promise<IConta> {
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
