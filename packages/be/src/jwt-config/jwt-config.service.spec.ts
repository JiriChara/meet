import { Test, TestingModule } from '@nestjs/testing';

import { JwtConfigService } from './jwt-config.service';
import { ConfigModule } from '../config/config.module';

describe('JwtConfigService', () => {
  let service: JwtConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtConfigService],
      imports: [ConfigModule],
    }).compile();

    service = module.get<JwtConfigService>(JwtConfigService);
  });

  it('instantiate a jwt config', () => {
    expect(service.createJwtOptions()).toEqual({
      secretOrPrivateKey: 'testing-secret',
      signOptions: {
        expiresIn: 3600,
      },
    });
  });
});
