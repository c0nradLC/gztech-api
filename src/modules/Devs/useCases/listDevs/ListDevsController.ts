import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDevsUseCase } from "./ListDevsUseCase";

class ListDevsController {
    async handle(request: Request, response: Response): Promise<Response> {
    
        const listDevsUseCase = container.resolve(ListDevsUseCase);
    
        const devs = await listDevsUseCase.execute();
    
        return response.status(200).send(devs);
      }
}

export { ListDevsController }