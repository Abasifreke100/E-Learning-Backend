import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('email')
export class EmailController {
    constructor(private mailService: MailerService){}

    @Get('plain-text-email')
    async plainTextEmail(@Query('toemail') toemail){
await this.mailService.sendMail({
    to: toemail,
    from: 'akpanMbietidughe@gmail.com',
    subject: 'Simple plain Text',
    text: 'verification code'
})
return 'success'
    }
}

