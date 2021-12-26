import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateNivelUseCase } from './UpdateNivelUseCase';

class UpdateNivelController {
    async handle(request: Request, response: Response): Promise<Response> {
      const {
        id,
        nivel
      } = request.body;
  
      if (!id) {
        return response.status(400).send("'id' expected");    
      }

      if (!nivel || nivel === '') {
        return response.status(400).send("'nivel' expected");    
      }

      const updateNivelUseCase = container.resolve(UpdateNivelUseCase);
  
      const updatedNivel = await updateNivelUseCase.execute({
        id: id,
        nivel: nivel,
      });
  
      return response.status(200).json(updatedNivel);
    }
}
  
export { UpdateNivelController };
  