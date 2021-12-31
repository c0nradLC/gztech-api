import { IDevsDTO } from "../../dtos/IDevsDTO";
import { Devs } from "../../entities/Devs";
import { getRepository, Repository } from "typeorm";
import { IDevsRepository } from "../IDevsRepository";
import { IDevsListDTO } from "../../dtos/IDevsListDTO";
import { Niveis } from "../../../Niveis/entities/Niveis";

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
        .leftJoinAndSelect("devs.nivel", "nivelId", `devs.nivel = ${nivelId}`)
        .where(`devs.nivel = ${nivelId}`)
        .getMany();

      return devs;
    }

    async list(search: string, page: number, pageSize: number): Promise<IDevsListDTO> {
      const query = await this.repository.createQueryBuilder('devs')
      .leftJoinAndSelect(Niveis, "niveis", "niveis.id = devs.nivelId")
      .where(`devs.nome LIKE '%${search}%'`)
      .orWhere(`devs.sexo LIKE LEFT('${search}', 1)`)
      .orWhere(`DATE_FORMAT(devs.datanascimento, '%d/%m/%Y') = ${search != '' ? `'${search}'` : "'%%'"}`)
      .orWhere(`devs.hobby LIKE '%${search}%'`)
      .orWhere(`niveis.nivel LIKE '%${search}%'`);

      if (Number(search)) {
        query.orWhere(`devs.idade = ${search}`)
      }

      query.select("devs.id", "id")
      .addSelect("devs.nome", "nome")
      .addSelect("niveis.id", "nivel")
      .addSelect("devs.sexo", "sexo")
      .addSelect("devs.datanascimento", "datanascimento")
      .addSelect("devs.idade", "idade")
      .addSelect("devs.hobby", "hobby");

      query.offset(pageSize * (page - 1)).limit(pageSize);
      const total = await query.getCount();
      const devs = await query.getRawMany();

      return {
        total,
        devs
      }
    }
}

export { DevsRepository }