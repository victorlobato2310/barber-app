import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Conta {

    @PrimaryGeneratedColumn('uuid')
    id_conta: string;

    @Column({ unique: true})
    usuario: string;

    @Column()
    senha: string;

}
