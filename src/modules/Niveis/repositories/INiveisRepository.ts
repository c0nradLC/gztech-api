import { INiveisDTO } from '../dtos/INiveisDTO';
import { Niveis } from '../entities/Niveis';
import { INiveisResponseDTO } from '../dtos/INiveisResponseDTO';

interface INiveisRepository {
    create(data: INiveisDTO): Promise<void>;
    update(data: INiveisDTO): Promise<Niveis>
    deleteById(nivelId: number): Promise<INiveisDTO>;
    getById(nivelId: number): Promise<INiveisDTO>;
    getAll(): Promise<INiveisDTO[]>;
    list(search: string, page: number, pageSize: number): Promise<INiveisResponseDTO>;
}

export { INiveisRepository };