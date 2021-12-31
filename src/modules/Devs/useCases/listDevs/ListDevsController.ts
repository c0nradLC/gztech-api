import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDevsUseCase } from "./ListDevsUseCase";

class ListDevsController {
    async handle(request: Request, response: Response): Promise<Response> {
      const page = Number(request.query.page) || 1;
      const size = Number(request.query.size) || 10;
      const search = request.query.search || '';

      const listDevsUseCase = container.resolve(ListDevsUseCase);
  
      const devs = await listDevsUseCase.execute(search.toString(), page, size);
  
      return response.status(200).send(devs);
    }
}

export { ListDevsController }