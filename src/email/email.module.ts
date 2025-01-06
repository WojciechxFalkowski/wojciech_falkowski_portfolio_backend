import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { emailProviders } from './email.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [DatabaseModule, ConfigModule],
    exports: [EmailService],
    controllers: [EmailController],
    providers: [...emailProviders, EmailService],
})
export class EmailModule { }
