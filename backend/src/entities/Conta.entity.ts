import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Cliente from "./Cliente.entity";

@Entity()
export class Conta {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true})
    usuario: string;

    @Column()
    senha: string;

    @OneToOne(() => Cliente, cliente => cliente.conta, { eager: true })
    cliente: Cliente;
}
