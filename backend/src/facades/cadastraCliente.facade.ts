import AppError from "../errors/AppError";
import { CadastrarContaService } from "../services/cadastrarConta.service";
import { CadastrarClienteService } from "../services/cadastarCliente.service";
import * as bcrypt from "bcryptjs";

export class CadastraClienteFacade {

    public static execute(nome: string, email: string, usuario: string, senha: string): Promise<any>{
        return new Promise(async (resolve, reject) => {
            try {

                let cadastrarContaService = new CadastrarContaService();

                let cadastrarClienteService = new CadastrarClienteService();

                const senhaHash = await bcrypt.hash(senha, 10);
                
                let cadastrarContaServiceResponse = await cadastrarContaService.execute(usuario, senhaHash);
                
                if(!cadastrarContaServiceResponse) {
                    throw new AppError({ message: 'Error no servidor', statusCode: 500 });
                }
                
                let cadastrarClienteServiceResponse = await cadastrarClienteService.execute(cadastrarContaServiceResponse, nome, email);
                
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