import { Conta } from './Conta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export default class Cliente {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column({ unique: true})
    email: string;

    @OneToOne(() => Conta, conta => conta.cliente, { onDelete: 'CASCADE' })
    @JoinColumn()
    conta: Conta;

}
