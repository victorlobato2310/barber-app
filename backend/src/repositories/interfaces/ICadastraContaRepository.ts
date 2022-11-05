import { IContaRequest } from "../../interfaces/IContaRequest";

export interface ICadastraContaRepository {
    
    save(conta: IContaRequest): Promise<any>;

    getByUsuario(usuario: string) : Promise<any>;

    getContaComVinculo(usuario: string): Promise<any>;
}