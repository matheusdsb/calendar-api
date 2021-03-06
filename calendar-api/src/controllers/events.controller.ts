import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { getConnection, getCustomRepository, getManager } from 'typeorm';
import { EventRepository } from '../database/repositories/event.repository';
import { Event } from '../database/entities/event.entity';
import { Response } from 'express';
import { DailyEvent } from '../database/entities/daily-event.entity';
import { DailyEventRepository } from '../database/repositories/daily-event.repository';
import { DailyEventBuilder } from '../database/builders/daily-event.builder';
import { WeeklyEventRepository } from '../database/repositories/weekly-event.repository';
import { WeeklyEvent } from 'src/database/entities/weekly-event.entity';
import { WeeklyEventBuilder } from '../database/builders/weekly-event.builder';

@Controller('events')
export class EventsController {
  constructor() {}

  @Get()
  async list(@Res() res: Response): Promise<any> {

    const repo = getCustomRepository(EventRepository);
    const list = await repo.find();
    return res.status(HttpStatus.OK).json(list);
  }

  @Get('create')
  async create(@Res() res: Response) {

    let event = new Event();
    event.name = 'daily event';
    event.startDateTime = new Date();
    event.durationTime = "15:30:00";

    let daily = new DailyEvent();
    daily.event = event;

    daily = await DailyEventBuilder.create(getConnection(), daily);

    return res.status(HttpStatus.CREATED).json(daily);
  }

  @Get('weekly')
  async listWeeklyEvents(@Res() res: Response): Promise<any> {

    const repo = getCustomRepository(WeeklyEventRepository);
    const list = await repo.find();
    return res.status(HttpStatus.OK).json(list);
  }

  @Get('create-weekly')
  async createWeekly(@Res() res: Response) {

    let event = new Event();
    event.name = 'weekly event';
    event.startDateTime = new Date();
    event.durationTime = "05:30:00";

    let weekly = new WeeklyEvent();
    weekly.event = event;    

    weekly = await WeeklyEventBuilder.create(getConnection(), weekly);

    return res.status(HttpStatus.CREATED).json(weekly);
  }
}
