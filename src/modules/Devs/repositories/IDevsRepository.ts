import { IDevsDTO } from '../dtos/IDevsDTO';
import { Devs } from '../entities/Devs';

interface IDevsRepository {
    create(data: IDevsDTO): Promise<void>;
    update(data: IDevsDTO): Promise<Devs>
    deleteById(nivelId: number): Promise<void>;
    getById(nivelId: number): Promise<Devs>;
    getAll(): Promise<Devs[]>;
    getDevsByNivelId(nivelId: number): Promise<Devs[]>;
}
  
export { IDevsRepository };