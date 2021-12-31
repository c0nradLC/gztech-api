import { IDevsDTO } from '../dtos/IDevsDTO';

interface IDevsResponseDTO {
    total: number;
    devs: IDevsDTO[];
}

export { IDevsResponseDTO };