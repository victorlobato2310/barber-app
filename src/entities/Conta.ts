import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Conta {

    @PrimaryGeneratedColumn('uuid')
    id_conta: string;

    @Column()
    usuario: string;

    @Column()
    senha: string;

}
