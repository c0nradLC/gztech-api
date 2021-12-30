import { Niveis } from "../../Niveis/entities/Niveis";

interface IDevsDTO {
    id?: number;
    nivel: Niveis;
    nome: string;
    sexo: string;
    datanascimento: Date;
    idade: number;
    hobby: string;
}

export { IDevsDTO };