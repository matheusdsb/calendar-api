import { Connection } from "typeorm";
import { DailyEvent } from '../entities/daily-event.entity';
import { EventBuilder } from './event.builder';

export class DailyEventBuilder {

    static async create(connection: Connection, input: DailyEvent) {
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        
        try {
            const manager = queryRunner.manager;
            
            const event = await EventBuilder.create(manager, input.event);

            input.id = event.id;
            input.event = event;

            const dailyEvent = await manager.save(input);

            await queryRunner.commitTransaction();
            return dailyEvent;

        } catch(error) {
            await queryRunner.rollbackTransaction();
            throw error;            
        }
    }
}