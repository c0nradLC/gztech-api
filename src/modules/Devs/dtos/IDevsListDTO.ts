import { Devs } from '../entities/Devs';

interface IDevsListDTO {
    total: number;
    devs: Devs[];
}

export { IDevsListDTO };