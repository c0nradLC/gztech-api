import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDevByIdUseCase } from "./ListDevByIdUseCase";

class ListDevByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { devId } = request.params;

        if (!devId) {
            return response.status(400).send("Campo 'devId' esperado!");    
        }

        const listDevByIdUsecase = container.resolve(ListDevByIdUseCase);
    
        const dev = await listDevByIdUsecase.execute(Number(devId));
    
        return response.status(200).send(dev);
    }
}

export { ListDevByIdController }