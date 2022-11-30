import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from './database/typeorm.config';
import { UserModule } from './model/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
