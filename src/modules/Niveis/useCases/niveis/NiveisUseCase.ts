import { INiveisRepository } from "../../repositories/INiveisRepository";
import { inject, injectable } from "tsyringe";
import { INiveisDTO } from "../../dtos/INiveisDTO";


@injectable()
class NiveisUseCase {

    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository,
    ) {}

    async execute(data: INiveisDTO) {
        await this.niveisRepository.create(data);
    }
}

export { NiveisUseCase }