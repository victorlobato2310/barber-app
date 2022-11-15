import { body } from "express-validator";

class AuthValidator {

    constructor(){}

    camposObrigatorios = [
        body('usuario').notEmpty().withMessage("O campo nome é obrigatório"),
        body('usuario').isLength({ min: 8 }).withMessage("O campo senha precisa ter no min 8 caracteres."),
        body('senha').notEmpty().withMessage("O campo senha é obrigatório"),
        body('senha').isLength({ min: 8 }).withMessage("O campo senha precisa ter no min 8 caracteres."),
    ]; 
}

export default new AuthValidator();