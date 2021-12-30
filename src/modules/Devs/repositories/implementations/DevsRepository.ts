import { IDevsDTO } from "../../dtos/IDevsDTO";
import { Devs } from "../../entities/Devs";
import { getRepository, Repository } from "typeorm";
import { IDevsRepository } from "../IDevsRepository";

class DevsRepository implements IDevsRepository {
    private repository: Repository<Devs>;
  
    constructor() {
      this.repository = getRepository(Devs);
    }
  
    async create(data: IDevsDTO): Promise<void> {
      const dev = this.repository.create({
        nivel: Number(data.nivel),
        nome: data.nome,
        sexo: data.sexo,
        datanascimento: data.datanascimento,
        idade: data.idade,
        hobby: data.hobby,
      });

      console.log(data);
      console.log(dev);
  
      await this.repository.save(dev);
    }

    async update(data: IDevsDTO): Promise<Devs> {
      const dev = this.repository.create({
        id: data.id,
        nivel: Number(data.nivel),
        nome: data.nome,
        sexo: data.sexo,
        datanascimento: data.datanascimento,
        idade: data.idade,
        hobby: data.hobby,
      });
  
      const updatedDev = await this.repository.save(dev);
  
      return updatedDev;
    }

    async deleteById(devId: number): Promise<void> {
      await this.repository.delete(devId);
    }
  
    async getById(devId: number): Promise<Devs> {
      const dev = await this.repository.createQueryBuilder('devs')
        .leftJoinAndSelect("devs.nivel", "nivelId")
        .where(`devs.id = ${devId}`)
        .getOne();
      
      return dev;
    }

    async getAll(): Promise<Devs[]> {
        const devs = await this.repository.createQueryBuilder('devs')
        .leftJoinAndSelect("devs.nivel", "nivelId")
        .getMany();

        return devs;
    }

    async getDevsByNivelId(nivelId: number): Promise<Devs[]> {
      const devs = await this.repository.createQueryBuilder('devs')
        .leftJoinAndSelect("devs.nivel", "nivelId")
        .where(`devs.nivel = ${nivelId}`)
        .getMany();

      return devs;
    }
}

export { DevsRepository }