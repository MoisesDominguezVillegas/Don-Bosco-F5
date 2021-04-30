import { CreateEventoDto } from './dto/create-evento-dto';
import { EventosService } from './eventos.service';
export declare class EventosController {
    private EventosService;
    constructor(EventosService: EventosService);
    create(createEventoDto: CreateEventoDto, response: any): void;
    getAll(response: any): void;
    update(updateEventoDto: CreateEventoDto, response: any, idEvento: any): void;
    delete(response: any, idEvento: any): void;
}
