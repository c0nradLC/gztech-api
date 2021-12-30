import { INiveisRepository } from "../../repositories/INiveisRepository";
import { inject, injectable } from 'tsyringe';

import { INiveisResponseDTO } from '../../dtos/INiveisResponseDTO';

import '../../../../shared/extensions/ToNiveisDTO';

@injectable()
class ListNiveisUseCase {
    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository
    ) {}

    async execute(search: string, page: number, pageSize: number): Promise<INiveisResponseDTO> {
        const niveis = await this.niveisRepository.list(search, page, pageSize);

        niveis.niveis = await niveis.niveis.ToNiveisDTO();

        return niveis;
    }
}

export { ListNiveisUseCase };