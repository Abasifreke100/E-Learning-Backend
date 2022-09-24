import { Inject, Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'

import { Strategy,  Profile } from 'passport-google-oauth20'
import { GoogleService } from '../google/google.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){

    constructor(
        @Inject('Google_Service') private readonly googleService: GoogleService,
    ){
        super({
            clientID: '177664351831-g85avgs52qld2le2966pnsdhcrqglrjf.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:2000/api/google/redirect',
            scope: ['profile', 'email', ], 
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile){
console.log(accessToken);
console.log(refreshToken);
console.log(profile);

const user = await this.googleService.validateUser({
   
    email: profile.emails[0].value,
    displayName: profile.displayName,

})
console.log('validate')
return user || null;
    }

    
}