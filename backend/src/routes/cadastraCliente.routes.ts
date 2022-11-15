import { Router } from "express";
import cadastraUsuarioController from "../controllers/cadastraCliente.controller";
import { validaCampos } from "../middlewares/validaCampos.middleware";
import cadastraClienteValidator from "../validators/cadastraCliente.validator";

const cadastraContaRouter = Router();

cadastraContaRouter.post('/cadastraCliente', cadastraClienteValidator.camposObrigatorios, validaCampos, cadastraUsuarioController.execute);

export default cadastraContaRouter;