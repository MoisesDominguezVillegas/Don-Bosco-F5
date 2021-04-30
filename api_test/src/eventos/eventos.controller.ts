import { Body, Post, Controller, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento-dto';
import { EventosService } from './eventos.service';

@Controller('Eventos')
export class EventosController {
   constructor(private eventosService: EventosService) {

   }


   @Post()
   create (@Body() createEventoDto: CreateEventoDto, @Res() response) {
      this.eventosService.createEvento(createEventoDto).then( Evento => {
         response.status(HttpStatus.CREATED).json(Evento);
      }).catch( () => {
         response.status(HttpStatus.FORBIDDEN).json({Evento: 'error en la creación del Evento'});
      });
   }

   @Get()
   getAll(@Res() response) {
      this.eventosService.getAll().then( EventosList => {
         response.status(HttpStatus.OK).json(EventosList);
      }).catch( () => {
         response.status(HttpStatus.FORBIDDEN).json({Evento: 'error en la obtención de los Eventos'});

      });
   }

   @Put(':id')
   update(@Body() updateEventoDto: CreateEventoDto, @Res() response, @Param('id') idEvento) {
      this.eventosService.updateEvento(idEvento, updateEventoDto).then( Evento => {
         response.status(HttpStatus.CREATED).json(Evento);
      }).catch( () => {
         response.status(HttpStatus.FORBIDDEN).json({Evento: 'error en la edición del Evento'});
      });
   }

   @Delete(':id')
   delete(@Res() response, @Param('id') idEvento) {
      this.eventosService.deleteEvento(idEvento).then( Evento => {
         response.status(HttpStatus.CREATED).json(Evento);
      }).catch( () => {
         response.status(HttpStatus.FORBIDDEN).json({Evento: 'error en la eliminación del Evento'});
      });
   }
}
