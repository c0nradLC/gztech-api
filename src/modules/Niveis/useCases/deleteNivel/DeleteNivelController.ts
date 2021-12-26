import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteNivelUseCase } from "./DeleteNivelUseCase";

class DeleteNivelController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        if (!id) {
            return response.status(400).send("'id' expected");    
        }

        const deleteNivelUseCase = container.resolve(DeleteNivelUseCase);

        await deleteNivelUseCase.execute(Number(id));

        return response.status(200).send();
    }
}

export { DeleteNivelController }