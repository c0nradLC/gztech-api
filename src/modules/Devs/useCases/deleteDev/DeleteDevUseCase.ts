import { inject, injectable } from "tsyringe";
import { IDevsRepository } from "../../repositories/IDevsRepository";

@injectable()
class DeleteDevUseCase {
    constructor(
        @inject('DevsRepository')
        private devsRepository: IDevsRepository
    ) { }

    async execute(devId: number): Promise<void>{
        await this.devsRepository.deleteById(devId);
    }
}

export { DeleteDevUseCase };