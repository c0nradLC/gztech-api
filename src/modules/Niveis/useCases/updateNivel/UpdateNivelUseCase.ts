import { inject, injectable } from 'tsyringe';
import { INiveisDTO } from '../../dtos/INiveisDTO';
import { Niveis } from '../../entities/Niveis';
import { INiveisRepository } from '../../repositories/INiveisRepository';
import { AppError } from "../../../../errors/AppError";

@injectable()
class UpdateNivelUseCase {
  constructor(
    @inject('NiveisRepository')
    private niveisRepository: INiveisRepository,
  ) { }

  async execute(data: INiveisDTO): Promise<Niveis> {

    const nivel = await this.niveisRepository.getById(data.id);

    if (!nivel) {
      throw new AppError("Este nível não existe");
    }
    
    const updatedNivel = await this.niveisRepository.update(data);

    return updatedNivel;
  }
}

export { UpdateNivelUseCase };
