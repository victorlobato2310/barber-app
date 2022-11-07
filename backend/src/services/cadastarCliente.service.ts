import { ICliente } from './../interfaces/ICliente';
import AppError from "../errors/AppError";
import { CadastraClienteRepository } from "../repositories/cadastraCliente.repository";

export class CadastrarClienteService {

    constructor(){}

    async execute(conta: any, nome: string, email: string): Promise<ICliente> {
        try {

            let repository = new CadastraClienteRepository();

            const existeClienteVinculado = await repository.getClienteComConta(conta.id);

            if(existeClienteVinculado?.conta.id != undefined || existeClienteVinculado?.conta.id != null) {
                throw new AppError({ message: 'Já existe um cliente vinculado a esta conta.', statusCode: 400 });
            }

            const response = await repository.save({ conta, nome, email });

            return response;

        } catch (error) {
            throw new AppError(error);
        }
    }
}
