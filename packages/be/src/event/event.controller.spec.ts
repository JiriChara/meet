import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { lorem } from 'faker';

import { EventController } from './event.controller';
import { EventService } from './event.service';
import { Event } from './event.entity';

describe('Event Controller', () => {
  let module: TestingModule;
  let controller: EventController;
  let service: EventService;

  const mockRepository = jest.fn();

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EventController],
      providers: [
        EventService,
        {
          provide: getRepositoryToken(Event),
          useValue: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<EventController>(EventController);
    service = module.get<EventService>(EventService);
  });

  describe('find all', () => {
    it('returns list of events', () => {
      const events = [anEvent(), anEvent()];

      service.findAll = jest.fn().mockImplementation(() => events);

      expect(controller.findAll()).toBe(events);
      expect(service.findAll).toHaveBeenCalledWith();
    });
  });
});

function anEvent() {
  return {
    name: lorem.sentence(),
    descriptions: lorem.paragraph(),
  };
}
