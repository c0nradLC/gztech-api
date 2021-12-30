import { Request, Response } from "express";
import { container } from "tsyringe";
import { DevsUseCase } from "./DevsUseCase";

class DevsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            nivelId,
            nome,
            sexo,
            datanascimento,
            idade,
            hobby,
        } = request.body;

        if (!nome || !nivelId || nivelId == 0 || !sexo || !datanascimento || !idade || !hobby) {
            return response.status(400).send("Preencha todos os campos");    
        }
    
        const devsUseCase = container.resolve(DevsUseCase);
    
        await devsUseCase.execute({
            nivel: nivelId,
            nome: nome,
            sexo: sexo,
            datanascimento: datanascimento,
            idade: idade,
            hobby: hobby,
        });
    
        return response.status(201).send();
    }
}

export { DevsController }