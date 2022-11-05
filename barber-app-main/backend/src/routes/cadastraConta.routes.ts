import { Router } from "express";
import cadastraUsuarioController from "../controllers/cadastraCliente.controller";
import { validaCampos } from "../middlewares/validaCampos.middleware";
import { body } from "express-validator";

const cadastraContaRouter = Router();

const camposObrigatorios = [
    body('nome').notEmpty().withMessage("O campo nome é obrigatório"),
    body('email').notEmpty().withMessage("O campo nome é obrigatório"),
    body('email').isEmail(),
    body('usuario').notEmpty().withMessage("O campo nome é obrigatório"),
    body('usuario').isLength({ min: 8 }).withMessage("O campo senha precisa ter no min 8 caracteres."),
    body('senha').notEmpty().withMessage("O campo senha é obrigatório"),
    body('senha').isLength({ min: 8 }).withMessage("O campo senha precisa ter no min 8 caracteres."),
];

cadastraContaRouter.post('/cadastraUsuario', camposObrigatorios, validaCampos, cadastraUsuarioController.execute);

export default cadastraContaRouter;