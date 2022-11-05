import { NextFunction, Request, Response } from "express";
import { BuscarEmailOuUsuarioService } from "../services/buscarEmailOuUsuario.service";

class BuscaEmailOuUsuarioController {

  async execute(request: Request, response: Response, next: NextFunction): Promise<any> {
    let { email, usuario }: any = request.query;
    let service = new BuscarEmailOuUsuarioService();

    return await service.execute(email, usuario).then((res: any) => {
      return response.status(200).send(res);
    }).catch((error: any) => next(error));
  }
}

export default new BuscaEmailOuUsuarioController();
