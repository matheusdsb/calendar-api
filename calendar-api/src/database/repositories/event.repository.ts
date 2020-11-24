import { EntityRepository } from "typeorm";
import { Event } from "../entities/event.entity";
import { GenericRepository } from './generic.repository';

@EntityRepository(Event)
export class EventRepository extends GenericRepository<Event> {

}