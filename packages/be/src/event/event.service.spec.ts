import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { lorem } from 'faker';

import { EventService } from './event.service';
import { Event } from './event.entity';

describe('Event Service', () => {
  let service: EventService;

  const mockRepository = {
    find: jest.fn(),
    save: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventService,
        {
          provide: getRepositoryToken(Event),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<EventService>(EventService);
  });

  describe('find all', () => {
    it('returns all users from entity repository', () => {
      const events = [anEvent(), anEvent()];

      mockRepository.find = jest.fn().mockImplementation(() => events);

      expect(service.findAll()).toBe(events);
      expect(mockRepository.find).toHaveBeenCalledWith();
    });
  });
});

function anEvent() {
  return {
    name: lorem.sentence(),
    descriptions: lorem.paragraph(),
  };
}
