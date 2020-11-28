import { Connection, EntityManager } from "typeorm";
import { WeeklyEvent } from '../entities/weekly-event.entity';
import { DayWeeklyEventBuilder } from './day-weekly-event.builder';
import { EventBuilder } from './event.builder';
import { DayWeeklyEvent } from '../entities/day-weekly-event.entity';

export class WeeklyEventBuilder {

    static async create(connection: Connection, input: WeeklyEvent) {
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        
        try {
            const manager = queryRunner.manager;
            
            const event = await EventBuilder.create(manager, input.event);

            input.id = event.id;
            input.event = event;

            const weekly = await manager.save(input);

            const day1 = new DayWeeklyEvent();
            day1.dayOfWeek = 1;
            day1.event = weekly;

            await DayWeeklyEventBuilder.create(manager, day1);

            const day2 = new DayWeeklyEvent();
            day2.dayOfWeek = 2;
            day2.event = weekly;

            await DayWeeklyEventBuilder.create(manager, day2);            

            await queryRunner.commitTransaction();
            return weekly;

        } catch(error) {
            await queryRunner.rollbackTransaction();
            throw error;            
        }
    }
}