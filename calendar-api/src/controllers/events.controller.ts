import { Controller, Get } from '@nestjs/common';

@Controller('events')
export class EventsController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello events';
  }
}
