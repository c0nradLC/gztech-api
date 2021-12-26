import { inject, injectable } from 'tsyringe';
import { INiveisDTO } from '../../dtos/INiveisDTO';
import { Niveis } from '../../entities/Niveis';
import { INiveisRepository } from '../../repositories/INiveisRepository';

@injectable()
class UpdateNivelUseCase {
  constructor(
    @inject('NiveisRepository')
    private niveisRepository: INiveisRepository,
  ) { }

  async execute(data: INiveisDTO): Promise<Niveis> {

    const updatedNivel = await this.niveisRepository.update({
      id: data.id,
      nivel: data.nivel,
    });

    return updatedNivel;
  }
}

export { UpdateNivelUseCase };
