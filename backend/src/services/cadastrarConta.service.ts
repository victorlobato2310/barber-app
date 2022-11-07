import AppError from "../errors/AppError";
import { IConta } from "../interfaces/IConta";
import { CadastraContaRepository } from "../repositories/cadastraConta.repository";

export class CadastrarContaService {

    constructor(){}

    async execute(usuario: string, senha: string): Promise<IConta> {
        try {

            let repository = new CadastraContaRepository();

            const existeUsuario: any = await repository.getByUsuario(usuario);

            if(existeUsuario && existeUsuario.cliente.id != undefined) {
                throw new AppError({ message: 'Usuário já existe.', statusCode: 400 });
            }
        
            const response = await repository.save({ usuario, senha });

            return response;

        } catch (error) {
            throw new AppError(error);
        }
    }
}
