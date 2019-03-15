import { Injectable } from '@nestjs/common';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';

import { ConfigService } from '../config/config.service';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secretOrPrivateKey: this.configService.jwtSecreateKey,
      signOptions: {
        expiresIn: 3600,
      },
    };
  }
}
