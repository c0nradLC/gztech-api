import { IDevsRepository } from "../../repositories/IDevsRepository";
import { inject, injectable } from "tsyringe";
import { IDevsDTO } from "../../dtos/IDevsDTO";


@injectable()
class DevsUseCase {

    constructor(
        @inject('DevsRepository')
        private devsRepository: IDevsRepository,
    ) {}

    async execute(data: IDevsDTO) {
        await this.devsRepository.create(data);
    }
}

export { DevsUseCase }