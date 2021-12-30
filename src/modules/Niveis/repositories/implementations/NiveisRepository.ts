import { INiveisDTO } from "../../dtos/INiveisDTO";
import { Niveis } from "../../entities/Niveis";
import { getRepository, Repository } from "typeorm";
import { INiveisRepository } from "../INiveisRepository";

class NiveisRepository implements INiveisRepository {
    private repository: Repository<Niveis>;
  
    constructor() {
      this.repository = getRepository(Niveis);
    }
  
    async create(data: INiveisDTO): Promise<void> {
      const nivel = this.repository.create({
        nivel: data.nivel
      })
  
      await this.repository.save(nivel);
    }

    async update(data: INiveisDTO): Promise<Niveis> {
      const nivel = this.repository.create({
        id: Number(data.id),
        nivel: data.nivel,
      });
  
      const updatedNivel = await this.repository.save(nivel);
  
      return updatedNivel;
    }

    async deleteById(nivelId: number): Promise<INiveisDTO> {

      const nivel = this.getById(nivelId);

      await this.repository.delete(nivelId);

      return nivel;
    }
  
    async getById(nivelId: number): Promise<INiveisDTO> {
      const nivel = await this.repository.createQueryBuilder('niveis')
        .where(`niveis.id = ${nivelId}`)
        .getOne();
  
      return nivel;
    }

    async getAll(): Promise<INiveisDTO[]> {
        const niveis = await this.repository.createQueryBuilder('niveis')
        .getMany();
        
        return niveis;
    }
  }
  
  export { NiveisRepository }