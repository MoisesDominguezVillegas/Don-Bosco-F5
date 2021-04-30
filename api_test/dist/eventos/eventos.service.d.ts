import { Repository } from 'typeorm';
import { CreateEventoDto } from './dto/create-evento-dto';
import { Evento } from './entity/evento.entity';
export declare class EventosService {
    private readonly eventoRepository;
    constructor(eventoRepository: Repository<Evento>);
    getAll(): Promise<Evento[]>;
    updateEvento(idEvento: number, Evento: CreateEventoDto): Promise<Evento>;
    deleteEvento(idEvento: number): Promise<any>;
}
