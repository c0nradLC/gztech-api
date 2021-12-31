import { IDevsDTO } from '../../modules/Devs/dtos/IDevsDTO';
import { Devs } from '../../modules/Devs/entities/Devs';
import { NiveisRepository } from '../../modules/Niveis/repositories/implementations/NiveisRepository';
import { INiveisDTO } from '../../modules/Niveis/dtos/INiveisDTO';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Array<T> {
    ToDevsDTO(): Promise<IDevsDTO[]>;
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.ToDevsDTO = async function (this: Devs[]): Promise<IDevsDTO[]> {
  const devs: IDevsDTO[] = [];

  const niveisRepository = new NiveisRepository();

  const niveis: INiveisDTO[] = [];

// eslint-disable-next-line no-restricted-syntax
  for (const item of this) {
    // eslint-disable-next-line no-restricted-syntax
    const nivel = await niveisRepository.getById(item.nivel);
    niveis.push(nivel);
  }

  this.forEach((x) => {
    const index = devs.findIndex((dev) => dev.id === x.id);
    const nivel = niveis.filter((nivel) => nivel.id === x.nivel );

    if (index >= 0) {
      devs[index].id = x.id;
      if (nivel.length > 0) {
        devs[index].nivel.id = x.nivel;
        devs[index].nivel.nivel = nivel[0].nivel;
      }
      devs[index].nome = x.nome;
      devs[index].sexo = x.sexo;
      devs[index].datanascimento = x.datanascimento;
      devs[index].idade = x.idade;
      devs[index].hobby = x.hobby;
    } else {
      
      devs.push({
          id: x.id,
          nivel: {
            id: x.nivel,
            nivel: nivel[0].nivel
          },
          nome: x.nome,
          sexo: x.sexo,
          datanascimento: x.datanascimento,
          idade: x.idade,
          hobby: x.hobby
      });
    }
  });
  return devs;
}

export { };