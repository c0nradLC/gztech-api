import { IDevsDTO } from '../dtos/IDevsDTO';
import { Devs } from '../entities/Devs';

interface INiveisRepository {
    create(data: IDevsDTO): Promise<void>;
    update(data: IDevsDTO): Promise<Devs>
    deleteById(nivelId: number): Promise<void>;
    getById(nivelId: number): Promise<IDevsDTO>;
    getAll(): Promise<IDevsDTO[]>;
}
  
export { IDevsRepository };