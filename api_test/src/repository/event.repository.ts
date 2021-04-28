import { EntityRepository, Repository } from "typeorm";
import { EventEntity } from "../database/entities/event.entity";

@EntityRepository(EventEntity)
export class EventRepository extends Repository<EventEntity> {

}