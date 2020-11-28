import { Entity, PrimaryColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Event } from './event.entity';
import { DayWeeklyEvent } from './day-weekly-event.entity';

@Entity('tb_weekly_event')
export class WeeklyEvent {

    @PrimaryColumn({ type: 'int', name: 'id' })
    id: number;    
    
	@OneToOne((type) => Event, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'id', referencedColumnName: 'id' })
	event: Event;

	@OneToMany(() => DayWeeklyEvent, d => d.dayOfWeek, { cascade: ['insert', 'update']})
	days: DayWeeklyEvent[];
}