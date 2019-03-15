import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { TypeOrmConfigModule } from './type-orm-config/type-orm-config.module';
import { TypeOrmConfigService } from './type-orm-config/type-orm-config.service';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmConfigModule,
    UserModule,
    EventModule,
  ],
  providers: [TypeOrmConfigService],
})
export class AppModule {}
