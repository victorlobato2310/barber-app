import { AppDataSource } from "../data-source";
import { Conta } from "../entities/Conta.entity";
import AppError from "../errors/AppError";
import { IContaRequest } from "../interfaces/IContaRequest";
import { ICadastraUsuarioRepository } from "./interfaces/ICadastraUsuarioRepository";

export class CadastraUsuarioRepository implements ICadastraUsuarioRepository {

    constructor(){}

    async save(conta: IContaRequest): Promise<any> {
        try {
            const repository = await AppDataSource.getRepository(Conta);

            return await repository.save(conta);
        } catch (error) {
            throw new AppError(error);
        }
    }

    async getByUsuario(usuario: string): Promise<any> {
        try {
            const repository = await AppDataSource.getRepository(Conta);
            
            return await repository.findOne({
                select: [
                    "id_conta",
                    "usuario",
                    "senha"
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
