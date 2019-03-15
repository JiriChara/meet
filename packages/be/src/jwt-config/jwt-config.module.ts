import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from 'src/config/config.module';
import { JwtConfigService } from './jwt-config.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigService,
      imports: [ConfigModule],
    }),
  ],
  providers: [JwtConfigService],
})
export class JwtConfigModule {}
