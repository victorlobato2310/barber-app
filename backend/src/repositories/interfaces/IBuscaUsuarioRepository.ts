export interface IBuscaUsuarioRepository {

    getByUsuario(usuario: string) : Promise<any>;
}