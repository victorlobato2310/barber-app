import { Conta } from './Conta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export default class Cliente {

    @PrimaryGeneratedColumn('uuid')
    id_cliente: string;

    @Column()
    nome: string;

    @Column({ unique: true})
    email: string;

    @OneToOne(() => Conta)
    @JoinColumn({ name: 'fk_conta', referencedColumnName: 'id_conta'})
    conta: Conta;

}
