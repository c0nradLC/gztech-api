import { IDevsRepository } from "../../repositories/IDevsRepository";
import { inject, injectable } from 'tsyringe';

import { IDevsDTO } from '../../dtos/IDevsDTO';

@injectable()
class ListDevsUseCase {
    constructor(
        @inject('DevsRepository')
        private devsRepository: IDevsRepository,
    ) {}

    async execute(): Promise<IDevsDTO[]> {
        const devs = await this.devsRepository.getAll();
    
        return devs;
      }
}

export { ListDevsUseCase };