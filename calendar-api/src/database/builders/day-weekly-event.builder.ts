import { EntityManager } from 'typeorm';
import { DayWeeklyEvent } from '../entities/day-weekly-event.entity';

export class DayWeeklyEventBuilder {
    
    static async create(manager: EntityManager, input: DayWeeklyEvent) {
        const dayWeeklyEvent = manager.create(DayWeeklyEvent, input); 
        return await manager.save(dayWeeklyEvent);
    }
}