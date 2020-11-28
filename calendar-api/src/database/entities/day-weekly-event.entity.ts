import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, Column } from 'typeorm';
import { Event } from './event.entity';
import { WeeklyEvent } from './weekly-event.entity';

@Entity('tb_day_weekly_event')
export class DayWeeklyEvent {

    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
    id: number;
	
	@ManyToOne(() => WeeklyEvent, w => w.days, { nullable: false})
	@JoinColumn({ name: 'id_weekly_event' })
	event: WeeklyEvent;

	@Column({type: 'integer', name: 'day_of_week', nullable: false})
	dayOfWeek: number;
}