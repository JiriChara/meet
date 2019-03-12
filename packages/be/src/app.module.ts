import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { TypeOrmConfigModule } from './type-orm-config/type-orm-config.module';
import { TypeOrmConfigService } from './type-orm-config/type-orm-config.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmConfigModule,
  ],
  providers: [TypeOrmConfigService],
})
export class AppModule {}
