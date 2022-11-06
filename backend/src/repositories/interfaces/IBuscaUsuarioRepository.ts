import { IConta } from "../../interfaces/IConta";

export interface IBuscaUsuarioRepository {

    getByUsuario(usuario: string) : Promise<IConta | any>;
}