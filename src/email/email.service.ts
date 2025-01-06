import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config'
import { SERVICE_TYPES } from './email.contracts';

@Injectable()
export class EmailService {
    private transporter;

    constructor(private configService: ConfigService) { }

    async sendMail(email: string, name: string, message: string): Promise<void> {
        const serviceType = SERVICE_TYPES.gmail;

        if (!serviceType) {
            throw new HttpException('Invalid service type', HttpStatus.CONFLICT);
        }

        this.transporter = nodemailer.createTransport({
            service: serviceType,
            host: "smtp.gmail.com",
            port: 465,
            debug: true,
            logger: true,
            auth: {
                user: this.configService.get('email.username'),
                pass: this.configService.get('email.password'),
            },
        });

        const mailOptions = {
            from: email, // adres nadawcy
            to: this.configService.get('email.username'), // lista odbiorców
            subject: 'Wiadomość z formularza kontaktowego', // temat
            text: `Od: ${email}\nImię: ${name}\nWiadomość: ${message}`, // treść wiadomości
            // html: '<b>Witaj</b>'
        };

        await this.transporter.sendMail(mailOptions);
    }
}
