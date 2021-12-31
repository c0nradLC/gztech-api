import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNiveisUseCase } from "./ListNiveisUseCase";

class ListNiveisController {
  async handle(request: Request, response: Response): Promise<Response> {
    const page = Number(request.query.page) || 1;
    const size = Number(request.query.size) || 10;
    const search = request.query.search || '';

    const listNiveisUseCase = container.resolve(ListNiveisUseCase);

    const niveis = await listNiveisUseCase.execute(search.toString(), page, size);

    return response.status(200).send(niveis);
  }
}

export { ListNiveisController }