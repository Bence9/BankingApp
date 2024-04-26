import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {BankTransferDTO} from '../../../models';
import { User } from './User';

@Entity()
export class BankTransfer implements BankTransferDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    timestamp: string;

    @Column()
    amount: number;

    @ManyToOne(() => User, user => user.outgoingTransactions, { eager: true})
    source: User;

    @ManyToOne(() => User, user => user.incomingTransactions, { eager: true})
    destination: User;
}