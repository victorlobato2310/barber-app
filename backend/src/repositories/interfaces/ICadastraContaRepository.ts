import { IConta } from "../../interfaces/IConta";
import { IContaRequest } from "../../interfaces/IContaRequest";

export interface ICadastraContaRepository {
    
    save(conta: IContaRequest): Promise<IConta>;

    getByUsuario(usuario: string) : Promise<IConta | any>;
    
}