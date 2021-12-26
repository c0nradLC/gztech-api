import { Request, Response } from "express";
import { container } from "tsyringe";
import { NiveisUseCase } from "./NiveisUseCase";

class NiveisController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
          nivel
        } = request.body;

        if (!nivel) {
            return response.status(400).send("'nivel' expected");    
        }
    
        const niveisUseCase = container.resolve(NiveisUseCase);
    
        await niveisUseCase.execute({
          nivel: String(nivel),
        });
    
        return response.status(201).send();
    }
}

export { NiveisController }