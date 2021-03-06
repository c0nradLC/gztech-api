import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import { Niveis } from '../../Niveis/entities/Niveis';

@Entity('devs')
export class Devs {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => Niveis, nivel => nivel.id)
    @JoinColumn({ name: "nivelId" })
    nivel: number;

    @Column()
    nome: string;

    @Column()
    sexo: string;

    @Column()
    datanascimento: Date;

    @Column()
    idade: number;

    @Column()
    hobby: string;
}