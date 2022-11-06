import { AppDataSource } from "../data-source";
import AppError from "../errors/AppError";
import { Conta } from '../entities/Conta.entity';

export class BuscarUsuarioRepository  {

    constructor(){}

    async execute(usuario: string): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Conta);
            
            return await repository.findOne({
                select: [
                    "cliente",
                    "usuario",
                    "senha",
                    "id"
                ],
                where: {
                    usuario: usuario
                }
            });

        } catch (error) {
            throw new AppError(error);
        }
    }
    
}
