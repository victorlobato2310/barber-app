import { Router } from "express";
import cadastraUsuarioController from "../controllers/cadastraUsuario.controller";

const cadastraUsuarioRouter = Router();

cadastraUsuarioRouter.post('/cadastraUsuario', cadastraUsuarioController.execute);

export default cadastraUsuarioRouter;