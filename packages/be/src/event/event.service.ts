import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRespository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRespository.find();
  }
}
