import { INiveisRepository } from "../../repositories/INiveisRepository";
import { inject, injectable } from 'tsyringe';

import { INiveisDTO } from '../../dtos/INiveisDTO';
import { IDevsRepository } from "../../../Devs/repositories/IDevsRepository";

import '../../../../shared/extensions/ToNiveisDTO';

@injectable()
class ListNiveisUseCase {
    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository,
        @inject('DevsRepository')
        private devsRepository: IDevsRepository
    ) {}

    async execute(): Promise<INiveisDTO[]> {
        const niveis = await this.niveisRepository.getAll();

        return niveis.ToNiveisDTO();
    }
}

export { ListNiveisUseCase };