import { Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Event } from './event.entity';

@Entity('tb_daily_event')
export class DailyEvent {

    @PrimaryColumn({ type: 'int', name: 'id' })
    id: number;    
    
	@OneToOne((type) => Event, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'id', referencedColumnName: 'id' })
	event: Event;
}