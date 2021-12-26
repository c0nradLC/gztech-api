import { INiveisRepository } from "../../repositories/INiveisRepository";
import { inject, injectable } from 'tsyringe';

import { INiveisDTO } from '../../dtos/INiveisDTO';

@injectable()
class ListNiveisUseCase {
    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository,
    ) {}

    async execute(): Promise<INiveisDTO[]> {
        const niveis = await this.niveisRepository.getAll();
    
        return niveis;
      }
}

export { ListNiveisUseCase };