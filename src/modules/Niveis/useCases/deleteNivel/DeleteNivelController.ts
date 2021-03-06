import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteNivelUseCase } from "./DeleteNivelUseCase";

class DeleteNivelController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { nivelId } = request.params;

        if (!nivelId) {
            return response.status(400).send("Campo 'nivelId' esperado!");    
        }

        const deleteNivelUseCase = container.resolve(DeleteNivelUseCase);

        await deleteNivelUseCase.execute(Number(nivelId))
        .then(() => {
            return response.status(204).send();
        })
        .catch((res) => {
            return response.status(res.statusCode).send(res.message);
        });
    }
}

export { DeleteNivelController }