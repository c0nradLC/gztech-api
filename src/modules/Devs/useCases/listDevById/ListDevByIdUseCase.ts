import { IDevsRepository } from "../../repositories/IDevsRepository";
import { inject, injectable } from 'tsyringe';

import { IDevsDTO } from '../../dtos/IDevsDTO';

@injectable()
class ListDevByIdUseCase {
    constructor(
        @inject('DevsRepository')
        private devsRepository: IDevsRepository,
    ) {}

    async execute(devId: number): Promise<IDevsDTO> {
        const dev = await this.devsRepository.getById(devId);
    
        return dev;
    }
}

export { ListDevByIdUseCase };