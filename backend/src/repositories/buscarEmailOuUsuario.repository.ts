import { IConta } from './../interfaces/IConta';
import { AppDataSource } from "../data-source";
import Cliente from "../entities/Cliente.entity";
import { Conta } from "../entities/Conta.entity";
import AppError from "../errors/AppError";
import { IBuscaEmailOuUsuarioRepository } from "./interfaces/IBuscaEmailOuUsuarioRepository";
import { ICliente } from '../interfaces/ICliente';

export class BuscarEmailOuUsuarioRepository implements IBuscaEmailOuUsuarioRepository {

    constructor(){}

    async getByEmail(email: string): Promise<ICliente | any> {

        try {
            const repository = AppDataSource.getRepository(Cliente);
            
            return await repository.findOne({
                select: [
                    "id",
                    "conta",
                    "email",
                    "nome",
                ],
                where: {
                    email: email
                }
            });

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
