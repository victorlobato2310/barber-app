import { NextFunction, Request, Response } from "express";
import { CadastraUsuarioFacade } from "../facades/cadastraUsuario.facade";

class CadastraUsuarioController {

  async execute(request: Request, response: Response, next: NextFunction): Promise<any> {
    let { usuario, senha } = request.body;

    return await CadastraUsuarioFacade.execute(usuario, senha).then((res: any) => {
      return response.status(200).send(res);
    }).catch((error: any) => next(error));
  }
}

export default new CadastraUsuarioController();
