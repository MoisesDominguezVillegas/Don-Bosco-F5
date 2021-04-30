import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evento } from "./evento.entity";

@Entity()
export class Users {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   email: string;

   @Column()
   password: string;

   @OneToMany(type => Evento, evento => evento.creador) evento: Evento[];  

}
