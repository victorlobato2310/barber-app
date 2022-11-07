import { NextFunction, Request, Response } from "express";
import { AuthFacade } from "../facades/auth.facade";

class AuthController {

  async execute(request: Request, response: Response, next: NextFunction): Promise<any> {
    
    return await AuthFacade.execute(request.body).then((res: any) => {
      return response.status(res.statusCode).send();
    }).catch((error: any) => next(error));
  }
}

export default new AuthController();
