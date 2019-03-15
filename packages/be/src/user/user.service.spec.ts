import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { name, internet } from 'faker';

import { UserService } from './user.service';
import { User } from './user.entity';

describe('User Service', () => {
  let service: UserService;

  const mockRepository = {
    find: jest.fn(),
    save: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe('find all', () => {
    it('returns all users from entity repository', () => {
      const users = [anUser(), anUser()];

      mockRepository.find = jest.fn().mockImplementation(() => users);

      expect(service.findAll()).toBe(users);
      expect(mockRepository.find).toHaveBeenCalledWith();
    });
  });

  describe('create', () => {
    it('saves new article in repository', () => {
      const user = anUser();

      const userEnitity = new User();
      userEnitity.name = user.name;
      userEnitity.email = user.email;
      userEnitity.password = user.password;

      mockRepository.save = jest.fn().mockImplementation(() => user);

      expect(service.create(user)).toBe(user);
      expect(mockRepository.save).toHaveBeenCalledWith(userEnitity);
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
