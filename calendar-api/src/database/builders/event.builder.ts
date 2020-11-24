import { EntityManager } from 'typeorm';
import { Event } from '../entities/event.entity';

export class EventBuilder {
    
    static async create(manager: EntityManager, input: Event) {
        const event = manager.create(Event, input);
        return await manager.save(event);
    }
}