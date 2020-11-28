import { EntityRepository } from "typeorm";
import { WeeklyEvent } from '../entities/weekly-event.entity';
import { GenericRepository } from './generic.repository';

@EntityRepository(WeeklyEvent)
export class WeeklyEventRepository extends GenericRepository<WeeklyEvent> {
}