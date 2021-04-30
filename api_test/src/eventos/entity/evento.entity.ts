import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";

@Entity('events')
export class Evento {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   descripción: string;

   @Column()
   fecha: string;

   @Column()
   creador: string;

   @ManyToOne(type => Users, users => users.evento) evento: Evento; 

}
