import { INiveisRepository } from "../../repositories/INiveisRepository";
import { inject, injectable } from 'tsyringe';

import { INiveisDTO } from '../../dtos/INiveisDTO';

@injectable()
class ListNivelByIdUseCase {
    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository,
    ) {}

    async execute(nivelId: number): Promise<INiveisDTO> {
        const nivel = await this.niveisRepository.getById(nivelId);
    
        return nivel;
      }
}

export { ListNivelByIdUseCase };