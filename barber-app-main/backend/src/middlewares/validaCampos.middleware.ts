import { NextFunction, Request, Response} from "express";
import { validationResult } from "express-validator";

export function validaCampos(request: Request, response: Response, next: NextFunction){
   
    // caso encontre erros, ficará nessa variável errors
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }else {
        next();
    }
    
}