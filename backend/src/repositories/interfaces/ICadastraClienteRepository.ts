import { ICliente } from './../../interfaces/ICliente';
import { IClienteRequest } from "../../interfaces/IClienteRequest";
import { IConta } from '../../interfaces/IConta';

export interface ICadastraClienteRepository {
    
    save(cliente: IClienteRequest): Promise<ICliente>;

    getClienteComConta(id_conta: string) : Promise<IConta | any>;
}