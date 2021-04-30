import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventoDto } from './dto/create-evento-dto';
import { Evento } from './entity/evento.entity';

@Injectable()
export class EventosService {
   constructor(
      @InjectRepository(Evento)
      private readonly eventoRepository: Repository<Evento>,
   ) {}

   async getAll(): Promise<Evento[]> {
      return await this.eventoRepository.find();
   }

   // async createEvento(@Body() Evento: CreateEventoDto): Promise<Evento> {
   //    const nuevoEvento = new Evento();
   //    nuevoEvento.descripción = Evento.descripción;
   //    nuevoEvento.fecha = Evento.fecha;
   //    nuevoEvento.creador = Evento.creador;

   //    return await this.eventoRepository.save(nuevoEvento);
   // }

   async updateEvento(idEvento: number, Evento: CreateEventoDto): Promise<Evento> {
      const EventoUpdate = await this.eventoRepository.findOne(idEvento);
      EventoUpdate.descripción = Evento.descripción;
      EventoUpdate.fecha = Evento.fecha;
      
      return await this.eventoRepository.save(EventoUpdate); 
   }

   async deleteEvento(idEvento: number): Promise<any> {
      return await this.eventoRepository.delete(idEvento);
   }
}
