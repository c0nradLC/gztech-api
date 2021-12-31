import { IDevsRepository } from "../../repositories/IDevsRepository";
import { inject, injectable } from 'tsyringe';

import { IDevsResponseDTO } from '../../dtos/IDevsResponseDTO';

import '../../../../shared/extensions/ToDevsDTO';

@injectable()
class ListDevsUseCase {
    constructor(
        @inject('DevsRepository')
        private devsRepository: IDevsRepository,
    ) {}

    async execute(search: string, page: number, pageSize: number): Promise<IDevsResponseDTO> {

        const devs = await this.devsRepository.list(search, page, pageSize);

        let response: IDevsResponseDTO;

        response = {
            total: devs.total,
            devs: await devs.devs.ToDevsDTO()
        }

        return response;
    }
}

export { ListDevsUseCase };