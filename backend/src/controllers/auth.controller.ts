import { NextFunction, Request, Response } from "express";
import { AuthFacade } from "../facades/auth.facade";

class AuthController {

  async execute(request: Request, response: Response, next: NextFunction): Promise<any> {
    let { usuario, senha } = request.body;

    return await AuthFacade.execute(usuario, senha).then((res: any) => {
      return response.status(res.statusCode).send();
    }).catch((error: any) => next(error));
  }
}

export default new AuthController();
