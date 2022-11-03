import { Router } from "express";
import cadastraUsuarioRouter from "./cadastraUsuario.routes";

const router = Router();
const rotaPadrao = '/api/v1';

router.use(rotaPadrao, cadastraUsuarioRouter);

export default router;