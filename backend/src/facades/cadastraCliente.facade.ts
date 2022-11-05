import AppError from "../errors/AppError";
import { CadastrarContaService } from "../services/cadastrarConta.service";
import { CadastrarClienteService } from "../services/cadastarCliente.service";

export class CadastraClienteFacade {

    public static execute(nome: string, email: string, usuario: string, senha: string): Promise<any>{
        return new Promise(async (resolve, reject) => {
            try {

                let cadastrarContaService = new CadastrarContaService();

                let cadastrarClienteService = new CadastrarClienteService();

                let cadastrarContaServiceResponse = await cadastrarContaService.execute(usuario, senha);
                
                if(!cadastrarContaServiceResponse) {
                    throw new AppError({ message: 'Error no servidor', statusCode: 500 });
                }
                
                let cadastrarClienteServiceResponse = await cadastrarClienteService.execute(cadastrarContaServiceResponse, nome, email);
                
                if(!cadastrarClienteServiceResponse) {
                    throw new AppError({ message: 'Error no servidor', statusCode: 500 });
                }

                let cliente = {
                    id: cadastrarClienteServiceResponse.id,
                    contaId: cadastrarClienteServiceResponse.conta.id,
                    nome: cadastrarClienteServiceResponse.nome,
                    email: cadastrarClienteServiceResponse.email
                }

                return resolve({
                    message: 'Cliente cadastrado com sucesso.',
                    usuario: cliente
                });

            } catch (error) {
                return reject(error);
            }
        });
    } 
}