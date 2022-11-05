import { AppDataSource } from "../data-source";
import Cliente from "../entities/Cliente.entity";
import { Conta } from "../entities/Conta.entity";
import AppError from "../errors/AppError";
import { IContaRequest } from "../interfaces/IContaRequest";
import { ICadastraContaRepository } from "./interfaces/ICadastraContaRepository";

export class CadastraContaRepository implements ICadastraContaRepository {

    constructor(){}

    async save(conta: IContaRequest): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Conta);

            return await repository.save(conta);
        } catch (error) {
            throw new AppError(error);
        }
    }

    async getByUsuario(usuario: string): Promise<any> {
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
    
    async getContaComVinculo(usuario: string): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Cliente);
            
            return await repository.createQueryBuilder('cliente').where('usuario = :usuario', {
                usuario: usuario
            }).getOne();

        } catch (error) {
            throw new AppError(error);
        }
    }
}
