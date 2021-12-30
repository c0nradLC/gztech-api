import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDevUseCase } from "./DeleteDevUseCase";

class DeleteDevController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { devId } = request.params;

        if (!devId) {
            return response.status(400).send("'devId' expected");    
        }

        const deleteDevUseCase = container.resolve(DeleteDevUseCase);

        await deleteDevUseCase.execute(Number(devId));

        return response.status(204).send();
    }
}

export { DeleteDevController }