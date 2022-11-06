import { Router } from "express";
import { validaCampos } from "../middlewares/validaCampos.middleware";
import { body } from "express-validator";
import authController from "../controllers/auth.controller";

const authRouter = Router();

const camposObrigatorios = [
    body('usuario').notEmpty().withMessage("O campo nome é obrigatório"),
    body('usuario').isLength({ min: 8 }).withMessage("O campo senha precisa ter no min 8 caracteres."),
    body('senha').notEmpty().withMessage("O campo senha é obrigatório"),
    body('senha').isLength({ min: 8 }).withMessage("O campo senha precisa ter no min 8 caracteres."),
];

authRouter.post('/auth', camposObrigatorios, validaCampos, authController.execute);

export default authRouter;