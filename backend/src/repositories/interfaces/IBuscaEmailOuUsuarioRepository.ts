import { ICliente } from './../../interfaces/ICliente';
import { IConta } from "../../interfaces/IConta";

export interface IBuscaEmailOuUsuarioRepository {
    
    getByEmail(email: string): Promise<ICliente | any>;

    getByUsuario(usuario: string) : Promise<IConta | any>;
}