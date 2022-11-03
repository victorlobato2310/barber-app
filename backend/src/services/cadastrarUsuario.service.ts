import AppError from "../errors/AppError";
import { CadastraUsuarioRepository } from "../repositories/cadastraUsuario.repository";
export class CadastrarUsuarioService {

    constructor(){}

    async execute(usuario: string, senha: string): Promise<any> {
        try {

            let repository = new CadastraUsuarioRepository();

            const existeUsuario = await repository.getByUsuario(usuario);

            if(existeUsuario) {
                throw new AppError({ message: 'Usuário já existe', statusCode: 400 });
            }

            const response = await repository.save({ usuario, senha });

            if(response) {
                return {
                    message: 'Usuário cadastrado com sucesso.'
                };
            }

        } catch (error) {
            throw new AppError(error);
        }
    }
}
