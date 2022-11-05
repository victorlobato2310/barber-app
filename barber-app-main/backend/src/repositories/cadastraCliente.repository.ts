import { ICadastraClienteRepository } from './interfaces/ICadastraClienteRepository';
import { IClienteRequest } from './../interfaces/IClienteRequest';
import { AppDataSource } from "../data-source";
import Cliente from "../entities/Cliente.entity";
import AppError from "../errors/AppError";

export class CadastraClienteRepository implements ICadastraClienteRepository {

    constructor(){}

    async save(cliente: IClienteRequest): Promise<any> {
        try {
            const repository =  AppDataSource.getRepository(Cliente);

            return await repository.save(cliente);
        } catch (error) {
            throw new AppError(error);
        }
    }

    async getClienteComConta(id_conta: string): Promise<any> {
        try {
            const repository =  AppDataSource.getRepository(Cliente);
            
            return await repository.createQueryBuilder('conta').where('id = :id', {
                id: id_conta
            }).getOne();

        } catch (error) {
            throw new AppError(error);
        }
    }

    
}
