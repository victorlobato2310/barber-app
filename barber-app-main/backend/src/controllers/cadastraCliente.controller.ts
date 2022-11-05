import { NextFunction, Request, Response } from "express";
import { CadastraClienteFacade } from "../facades/cadastraCliente.facade";

class CadastraClienteController {

  async execute(request: Request, response: Response, next: NextFunction): Promise<any> {
    let { nome, email, usuario, senha } = request.body;

    return await CadastraClienteFacade.execute(nome, email, usuario, senha).then((res: any) => {
      return response.status(200).send(res);
    }).catch((error: any) => next(error));
  }
}

export default new CadastraClienteController();
