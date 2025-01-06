import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration], isGlobal: true, cache: true, }), DatabaseModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
