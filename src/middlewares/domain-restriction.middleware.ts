import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DomainRestrictionMiddleware implements NestMiddleware {
    constructor(private readonly configService: ConfigService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const allowedOrigin = this.configService.get<string>('allowed.origin');

        const origin = req.headers.origin;

        if (origin === allowedOrigin) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    }
}
