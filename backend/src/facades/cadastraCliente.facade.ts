import AppError from "../errors/AppError";
import { CadastrarContaService } from "../services/cadastrarConta.service";
import { CadastrarClienteService } from "../services/cadastarCliente.service";
import * as bcrypt from "bcryptjs";
import { ICadastraClienteResponse } from "../interfaces/ICadastraClienteResponse";
import { ICadastraClienteBodyRequest } from "../interfaces/ICadastraClienteBodyRequest";

export class CadastraClienteFacade {

    public static execute(body: ICadastraClienteBodyRequest): Promise<ICadastraClienteResponse>{
        return new Promise(async (resolve, reject) => {
            try {

                let cadastrarContaService = new CadastrarContaService();

                let cadastrarClienteService = new CadastrarClienteService();

                const senhaHash = await bcrypt.hash(body.senha, 10);
                
                let cadastrarContaServiceResponse = await cadastrarContaService.execute(body.usuario, senhaHash);
                
                if(!cadastrarContaServiceResponse) {
                    throw new AppError({ message: 'Error no servidor', statusCode: 500 });
                }
                
                let cadastrarClienteServiceResponse = await cadastrarClienteService.execute(cadastrarContaServiceResponse, body.nome, body.email);
                
                if(!cadastrarClienteServiceResponse) {
                    throw new AppError({ message: 'Error no servidor', statusCode: 500 });
                }

                return resolve({
                    message: 'Cliente cadastrado com sucesso.'
                });

            } catch (error) {
                return reject(error);
            }
        });
    } 
}