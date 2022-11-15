import { Router } from "express";
import { validaCampos } from "../middlewares/validaCampos.middleware";
import authController from "../controllers/auth.controller";
import authValidator from "../validators/auth.validator";

const authRouter = Router();

authRouter.post('/auth', authValidator.camposObrigatorios, validaCampos, authController.execute);

export default authRouter;