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
        nivel: data.nivel,
        nome: data.nome,
        sexo: data.sexo,
        datanascimento: data.datanascimento,
        idade: data.idade,
        hobby: data.hobby,
      });
  
      await this.repository.save(dev);
    }

    async update(data: IDevsDTO): Promise<Devs> {
      const dev = this.repository.create({
        id: data.id,
        nivel: data.nivel,
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
  
    async getById(devId: number): Promise<IDevsDTO> {
      const dev = await this.repository.createQueryBuilder('devs')
        .where(`niveis.id = ${devId}`)
        .getOne();
  
      return dev;
    }

    async getAll(): Promise<IDevsDTO[]> {
        const devs = await this.repository.createQueryBuilder('devs')
        .getMany();

        return devs;
    }
}

export { DevsRepository }