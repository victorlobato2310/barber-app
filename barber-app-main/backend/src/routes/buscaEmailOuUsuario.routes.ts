import { Router } from "express";
import buscaEmailOuUsuarioController from "../controllers/buscaEmailOuUsuario.controller";

const buscaEmailOuUsuarioRouter = Router();

buscaEmailOuUsuarioRouter.get('/buscaEmailOuUsuario', buscaEmailOuUsuarioController.execute);

export default buscaEmailOuUsuarioRouter;