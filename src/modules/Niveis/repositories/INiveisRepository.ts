import { INiveisDTO } from '../dtos/INiveisDTO';
import { Niveis } from '../entities/Niveis';

interface INiveisRepository {
    create(data: INiveisDTO): Promise<void>;
    update(data: INiveisDTO): Promise<Niveis>
    deleteById(nivelId: number): Promise<INiveisDTO>;
    getById(nivelId: number): Promise<INiveisDTO>;
    getAll(): Promise<INiveisDTO[]>;
}

export { INiveisRepository };