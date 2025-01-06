import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private emailService: EmailService) { }

    @Post()
    public async sendEmail(@Body() body: { email: string; name: string; message: string }) {
        await this.emailService.sendMail(body.email, body.name, body.message);
        return { message: 'Wiadomość została wysłana' }
    }
}
