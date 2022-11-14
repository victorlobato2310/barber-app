
import { AppDataSource } from '../../src/data-source';
import app from "../../src/server";
import { Conta } from '../../src/entities/Conta.entity';
import Cliente from '../../src/entities/Cliente.entity';
const request = require("supertest");

jest.mock('typeorm', () => ({
    ...jest.requireActual('typeorm'),
    getCustomRepository: jest.fn(), 
})),

describe('testando buscaEmailOuUsuarioController', () => {

    beforeAll(async () => {

        await AppDataSource.initialize();

        let contaRepo = AppDataSource.getRepository(Conta);
        let conta = contaRepo.create({ usuario: 'cicrano2022', senha: '123456789' });
        await contaRepo.save(conta);
        
        let clienteRepo = AppDataSource.getRepository(Cliente);
        let cliente = clienteRepo.create({ email: 'cicrano@email.com', nome: 'cicrano beltrano', conta: conta });
        await clienteRepo.save(cliente);

    });

    afterAll(async() => {
        return await AppDataSource.dropDatabase();
    });

    test("Deve existir um usuario", async () => {
        let response = await request(app)
            .get('/api/v1/buscaEmailOuUsuario?usuario=cicrano2022');
        
        expect(response.status).toBe(200);
        expect(response.body.existeEmailOuUsuario).toBe(true);
    });

    test("Não deve existir um usuario", async () => {
        let response = await request(app)
            .get('/api/v1/buscaEmailOuUsuario?usuario=teste12345');
        
        expect(response.status).toBe(200);
        expect(response.body.existeEmailOuUsuario).toBe(false);
    });

    test("Deve existir um email", async () => {

        let response = await request(app)
            .get('/api/v1/buscaEmailOuUsuario?email=cicrano@email.com');
        
        expect(response.status).toBe(200);
        expect(response.body.existeEmailOuUsuario).toBe(true);
    });

    test("Não deve existir um email", async () => {

        let response = await request(app)
            .get('/api/v1/buscaEmailOuUsuario?email=usuario2022@gmail.com');
        
        expect(response.status).toBe(200);
        expect(response.body.existeEmailOuUsuario).toBe(false);
    });
});