import { Router } from "express";
import authRouter from "./auth.routes";
import buscaEmailOuUsuarioRouter from "./buscaEmailOuUsuario.routes";
import cadastraContaRouter from "./cadastraCliente.routes";

const router = Router();
const rotaPadrao = '/api/v1';

router.use(rotaPadrao, cadastraContaRouter);
router.use(rotaPadrao, buscaEmailOuUsuarioRouter);
router.use(rotaPadrao, authRouter);

export default router;