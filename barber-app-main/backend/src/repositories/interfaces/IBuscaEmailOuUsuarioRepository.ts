export interface IBuscaEmailOuUsuarioRepository {
    
    getByEmail(email: string): Promise<any>;

    getByUsuario(usuario: string) : Promise<any>;
}