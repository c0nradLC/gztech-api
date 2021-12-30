import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDevUseCase } from './UpdateDevUseCase';

class UpdateDevController {
    async handle(request: Request, response: Response): Promise<Response> {
      const {
        id,
        nivel,
        nome,
        sexo,
        datanascimento,
        idade,
        hobby
      } = request.body;
  
      if (!id || !Number(id) || !nivel || !nome || !sexo || !datanascimento || !idade || !hobby) {
        return response.status(400).send("Preencha todos os campos!");    
      }

      const updateDevUseCase = container.resolve(UpdateDevUseCase);
  
      const updatedDev = await updateDevUseCase.execute({
        id: Number(id),
        nivel: nivel,
        nome: nome,
        sexo: sexo,
        datanascimento: datanascimento,
        idade: idade,
        hobby: hobby,
      });
  
      return response.status(200).json(updatedDev);
    }
}
  
export { UpdateDevController };
  