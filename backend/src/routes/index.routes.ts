import { Router } from "express";
import buscaEmailOuUsuarioRouter from "./buscaEmailOuUsuario.routes";
import cadastraContaRouter from "./cadastraConta.routes";

const router = Router();
const rotaPadrao = '/api/v1';

router.use(rotaPadrao, cadastraContaRouter);
router.use(rotaPadrao, buscaEmailOuUsuarioRouter);

export default router;