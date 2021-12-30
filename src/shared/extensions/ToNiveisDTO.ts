import { INiveisDTO } from '../../modules/Niveis/dtos/INiveisDTO';
import { Niveis } from '../../modules/Niveis/entities/Niveis';
import { IDevsDTO } from '../../modules/Devs/dtos/IDevsDTO';
import { DevsRepository } from '../../modules/Devs/repositories/implementations/DevsRepository';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Array<T> {
    ToNiveisDTO(): Promise<INiveisDTO[]>;
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.ToNiveisDTO = async function (this: Niveis[]): Promise<INiveisDTO[]> {
  const niveis: INiveisDTO[] = [];

  const devsRepository = new DevsRepository();

  const devs: IDevsDTO[] = [];

// eslint-disable-next-line no-restricted-syntax
  for (const item of this) {
    // eslint-disable-next-line no-restricted-syntax
    const dev = await devsRepository.getDevsByNivelId(item.id);
    dev.forEach((dev) => {
        devs.push({
            id: dev.id,
            datanascimento: dev.datanascimento,
            hobby: dev.hobby,
            idade: dev.idade,
            nome: dev.nome,
            sexo: dev.sexo,
            nivel: {
                id: item.id,
                nivel: item.nivel
            }
        });
    });
  }

  this.forEach((x) => {
    const index = niveis.findIndex((nivel) => nivel.id === x.id);

    let counter = 0;

    devs.forEach((dev) => {
        if (dev.nivel.id === x.id) {
            counter++;
        }
    })

    if (index >= 0) {
        niveis[index].id = x.id;
        niveis[index].nivel = x.nivel;
        niveis[index].qtdDevs = counter;
    } else {
        niveis.push({
            id: x.id,
            nivel: x.nivel,
            qtdDevs: counter
        });
    }
  });
  return niveis;
}

export { };