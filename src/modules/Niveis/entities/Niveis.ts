import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('niveis')
export class Niveis {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nivel: string;
}
