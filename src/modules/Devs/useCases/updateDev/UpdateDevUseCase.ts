import { inject, injectable } from 'tsyringe';
import { IDevsDTO } from '../../dtos/IDevsDTO';
import { Devs } from '../../entities/Devs';
import { IDevsRepository } from '../../repositories/IDevsRepository';

@injectable()
class UpdateDevUseCase {
  constructor(
    @inject('DevsRepository')
    private devsRepository: IDevsRepository,
  ) { }

  async execute(data: IDevsDTO): Promise<Devs> {

    const updatedDev = await this.devsRepository.update({
        id: data.id,
        nivel: data.nivel,
        nome: data.nome,
        sexo: data.sexo,
        datanascimento: data.datanascimento,
        idade: data.idade,
        hobby: data.hobby,
    });

    return updatedDev;
  }
}

export { UpdateDevUseCase };
