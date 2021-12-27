import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNiveisUseCase } from "./ListNiveisUseCase";

class ListNiveisController {
    async handle(request: Request, response: Response): Promise<Response> {
    
        const listNiveisUseCase = container.resolve(ListNiveisUseCase);
    
        const niveis = await listNiveisUseCase.execute();
    
        return response.status(200).send(niveis);
      }
}

export { ListNiveisController }