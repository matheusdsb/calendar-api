import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { DailyEvent } from './daily-event.entity';

@Entity('tb_event')
export class Event {

    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'name', length: 255, nullable: false })
    name: string;

    @Column({ type: 'timestamp without time zone', name: 'start_date_time', nullable: false})
    startDateTime: Date;

    @Column({ type: 'time without time zone', name: 'duration_time'})
    durationTime: string;

    @OneToOne(
		type => DailyEvent,
		d => d.event,
		{ nullable: true }
	)
	dailyEvent?: DailyEvent;
}