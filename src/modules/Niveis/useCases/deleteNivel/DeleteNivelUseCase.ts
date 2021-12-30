import { AppError } from "../../../../errors/AppError";
import { IDevsRepository } from "../../../Devs/repositories/IDevsRepository";
import { inject, injectable } from "tsyringe";
import { INiveisRepository } from "../../repositories/INiveisRepository";
import { INiveisDTO } from "../../dtos/INiveisDTO";

@injectable()
class DeleteNivelUseCase {
    constructor(
        @inject('NiveisRepository')
        private niveisRepository: INiveisRepository,
        @inject('DevsRepository')
        private devsRepository: IDevsRepository
    ) { }

    async execute(nivelId: number): Promise<INiveisDTO> {
        const devs = await this.devsRepository.getDevsByNivelId(nivelId);

        if (devs.length > 0) {
            throw new AppError("Não é possível excluir este nível pois existem desenvolvedores associados à ele!", 501);
        }

        const nivel = await this.niveisRepository.deleteById(nivelId);

        return nivel;
    }
}

export { DeleteNivelUseCase };