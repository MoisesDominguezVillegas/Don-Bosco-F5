import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  creator: string;

  @Column()
  creatorEmail: string;
}