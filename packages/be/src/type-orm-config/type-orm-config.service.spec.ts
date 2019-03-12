import { Test, TestingModule } from '@nestjs/testing';

import { TypeOrmConfigService } from './type-orm-config.service';
import { ConfigModule } from '../config/config.module';

describe('TypeOrmConfigService', () => {
  let service: TypeOrmConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOrmConfigService],
      imports: [ConfigModule],
    }).compile();
    service = module.get<TypeOrmConfigService>(TypeOrmConfigService);
  });

  it('instantiate a db config', () => {
    expect(service.createTypeOrmOptions()).toEqual({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'meet_test',
      entities: ['src/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    });
  });
});
