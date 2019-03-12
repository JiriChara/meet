import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigService } from '../../src/config/config.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    Logger.log(`Creating DB connection with following options: ${JSON.stringify(this.configService)}`, 'TypeOrmOptionsFactory');

    const {
      databaseHost: host,
      databasePort: port,
      databaseUser: username,
      databasePassword: password,
      databaseName: database,
    } = this.configService;

    return {
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities: ['src/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  }
}
