import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateNivelUseCase } from './UpdateNivelUseCase';

class UpdateNivelController {
    async handle(request: Request, response: Response): Promise<Response> {
      const {
        id,
        nivel
      } = request.body;
  
      if (!id || !Number(id)) {
        return response.status(400).send("Campo 'id' esperado");    
      }

      if (!nivel || nivel === '') {
        return response.status(400).send("Campo 'nível' esperado");    
      }

      const updateNivelUseCase = container.resolve(UpdateNivelUseCase);
  
      await updateNivelUseCase.execute({
        id: id,
        nivel: nivel,
      })
      .catch((res) => {
        return response.status(res.statusCode).send(res.message);
      });

      return response.status(200).send();
    }
}
  
export { UpdateNivelController };
  