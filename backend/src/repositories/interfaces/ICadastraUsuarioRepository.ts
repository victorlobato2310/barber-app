import { IContaRequest } from "../../interfaces/IContaRequest";

export interface ICadastraUsuarioRepository {
    
    save(conta: IContaRequest): Promise<any>;

    getByUsuario(usuario: string) : Promise<any>;
}