import { getConnection } from 'typeorm';
import { EventEntity } from '../database/entities/event.entity';
import { EventRepository } from '../repository/event.repository';

export class EventService {
  private eventRepository: EventRepository;

  constructor(){
    this.eventRepository = getConnection("paco").getCustomRepository(EventRepository);
  }

  public index = async () => {
    const events = await this.eventRepository.find()
    return events;
  } 

  public create = async (event: EventEntity) => {
    const newEvent = await this.eventRepository.save(event);
    return newEvent;
  } 

  public update =  async(event: EventEntity, id: number) => {
    const updatedEvent = await this.eventRepository.update(id, event);
    return updatedEvent;
  } 

  public delete = async (id: number) => {
    const deletedEvent = await this.eventRepository.delete(id);
    return deletedEvent;
  } 
}