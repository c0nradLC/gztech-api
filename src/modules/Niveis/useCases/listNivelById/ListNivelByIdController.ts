import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNivelByIdUseCase } from "./ListNivelByIdUseCase";

class ListNivelByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nivelId } = request.params;

        if (!nivelId) {
            return response.status(400).send("Campo 'nivelId' esperado!");    
        }

        const listNivelByIdUseCase = container.resolve(ListNivelByIdUseCase);
    
        const nivel = await listNivelByIdUseCase.execute(Number(nivelId));
    
        return response.status(200).send(nivel);
      }
}

export { ListNivelByIdController }