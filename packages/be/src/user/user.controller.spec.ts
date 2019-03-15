import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { name, internet } from 'faker';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

describe('User Controller', () => {
  let module: TestingModule;
  let controller: UserController;
  let service: UserService;

  const mockRepository = jest.fn();

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('find all', () => {
    it('returns list of users', () => {
      const users = [anUser(), anUser()];

      service.findAll = jest.fn().mockImplementation(() => users);

      expect(controller.findAll()).toBe(users);
      expect(service.findAll).toHaveBeenCalledWith();
    });
  });

  describe('create', () => {
    it('creates new user', () => {
      const user = anUser();

      service.create = jest.fn().mockImplementation(() => user);

      expect(controller.create(user)).toBe(user);
      expect(service.create).toHaveBeenCalledWith(user);
    });
  });
});

function anUser() {
  return {
    name: name.findName(),
    email: internet.email(),
    password: internet.password(),
  };
}
