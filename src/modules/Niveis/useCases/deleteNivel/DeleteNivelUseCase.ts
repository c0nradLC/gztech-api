import { inject, injectable } from "tsyringe";
import { INiveisRepository } from "../../repositories/INiveisRepository";

@injectable()
class DeleteNivelUseCase {
    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository
    ) { }

    async execute(nivelId: number): Promise<void>{
        await this.niveisRepository.deleteById(nivelId);
    }
}

export { DeleteNivelUseCase };