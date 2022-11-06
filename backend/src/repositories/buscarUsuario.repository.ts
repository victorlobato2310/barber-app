import { AppDataSource } from "../data-source";
import AppError from "../errors/AppError";
import { Conta } from '../entities/Conta.entity';
import { IBuscaUsuarioRepository } from "./interfaces/IBuscaUsuarioRepository";
import { IConta } from "../interfaces/IConta";

export class BuscarUsuarioRepository implements IBuscaUsuarioRepository {

    constructor(){}

    async getByUsuario(usuario: string): Promise<IConta | any> {
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
