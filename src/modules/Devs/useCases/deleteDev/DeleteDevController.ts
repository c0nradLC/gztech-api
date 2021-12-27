import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDevUseCase } from "./DeleteDevUseCase";

class DeleteDevController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        if (!id) {
            return response.status(400).send("'id' expected");    
        }

        const deleteDevUseCase = container.resolve(DeleteDevUseCase);

        await deleteDevUseCase.execute(Number(id));

        return response.status(204).send();
    }
}

export { DeleteDevController }