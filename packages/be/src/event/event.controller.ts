import { Controller, Get, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';

import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }
}
