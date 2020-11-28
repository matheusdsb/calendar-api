import { EntityRepository} from "typeorm";
import { DailyEvent } from '../entities/daily-event.entity';
import { GenericRepository } from './generic.repository';

@EntityRepository(DailyEvent)
export class DailyEventRepository extends GenericRepository<DailyEvent> {
}