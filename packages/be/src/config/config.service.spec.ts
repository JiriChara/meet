import { Test, TestingModule } from '@nestjs/testing';
import { resolve } from 'path';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeAll(async () => {
    service = await createConfigService(resolve(__dirname, '..', '..', 'test.env'));
  });

  it('loads config test.env file', () => {
    expect(service.get('DATABASE_USER')).toBe('postgres');
    expect(service.get('DATABASE_PASSWORD')).toBe('postgres');
  });

  it('exposes database port', () => {
    expect(service.databasePort).toBe(5432);
  });

  it('exposes database host', () => {
    expect(service.databaseHost).toBe('localhost');
  });

  it('exposes database user', () => {
    expect(service.databaseUser).toBe('postgres');
  });

  it('exposes database password', () => {
    expect(service.databasePassword).toBe('postgres');
  });

  it('exposes database name', () => {
    expect(service.databaseName).toBe('meet_test');
  });
});

async function createConfigService(path: string): Promise<ConfigService> {
  const module: TestingModule = await Test.createTestingModule({
    providers: [{
      provide: ConfigService,
      useValue: new ConfigService(path),
    }],
  }).compile();

  return module.get<ConfigService>(ConfigService);
}
