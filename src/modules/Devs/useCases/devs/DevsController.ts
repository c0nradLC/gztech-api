import { Request, Response } from "express";
import { container } from "tsyringe";
import { DevsUseCase } from "./DevsUseCase";

class DevsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            nivel,
            nome,
            sexo,
            datanascimento,
            idade,
            hobby,
        } = request.body;

        if (!nome) {
            return response.status(400).send("'nome' expected");    
        }

        if (!nivel || nivel == 0) {
            return response.status(400).send("'nivel' expected");    
        }
    
        const devsUseCase = container.resolve(DevsUseCase);
    
        await devsUseCase.execute({
            nivel: nivel,
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