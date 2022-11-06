import { IConta } from './../interfaces/IConta';
import { AppDataSource } from "../data-source";
import { Conta } from "../entities/Conta.entity";
import AppError from "../errors/AppError";
import { IContaRequest } from "../interfaces/IContaRequest";
import { ICadastraContaRepository } from "./interfaces/ICadastraContaRepository";

export class CadastraContaRepository implements ICadastraContaRepository {

    constructor(){}

    async save(conta: IContaRequest): Promise<IConta> {
        try {
            const repository = AppDataSource.getRepository(Conta);

            return await repository.save(conta);
        } catch (error) {
            throw new AppError(error);
        }
    }

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
