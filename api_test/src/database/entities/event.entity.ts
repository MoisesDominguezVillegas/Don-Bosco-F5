import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  content: string;
}