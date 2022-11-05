import { IClienteRequest } from "../../interfaces/IClienteRequest";

export interface ICadastraClienteRepository {
    
    save(cliente: IClienteRequest): Promise<any>;

    getClienteComConta(id_conta: string) : Promise<any>;
}