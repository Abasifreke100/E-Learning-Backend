import { Module } from '@nestjs/common';
// import { GoogleService } from './google.service';
// import { GoogleController } from './google.controller';
import { GoogleService } from './google.service';
import { GoogleStrategy } from 'src/google/utils/GoogleStrategy';
import { GoogleController } from './google.controller';
import { SessionSerializer } from 'src/google/utils/serializer';

@Module({
  controllers: [GoogleController],
  providers: [GoogleService, GoogleStrategy,SessionSerializer,
  
    {
      provide: 'Google_Service',
      useClass: GoogleService
    }],
  exports: [GoogleService]

})
export class GoogleModule {}
