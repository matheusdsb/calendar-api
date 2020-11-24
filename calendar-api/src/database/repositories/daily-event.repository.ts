import { EntityRepository, Transaction, TransactionManager, EntityManager } from "typeorm";
import { DailyEvent } from '../entities/daily-event.entity';
import { Event } from "../entities/event.entity";
import { GenericRepository } from './generic.repository';

@EntityRepository(DailyEvent)
export class DailyEventRepository extends GenericRepository<DailyEvent> {
    @Transaction()
    async saveS(@TransactionManager() manager: EntityManager, dailyEvent: DailyEvent) {
        let event = manager.create(Event, dailyEvent.event);
        event = await manager.save(event);

        dailyEvent.id = event.id;
        dailyEvent.event = event;
        dailyEvent =  manager.create(DailyEvent, dailyEvent);
        
        return await manager.save(dailyEvent);        
    }
}