import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { GoogleService } from "../google/google.service";
import { Userr } from "../User/user";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(
        @Inject('Google_Service') private readonly googleService: GoogleService,
        ){
            super();
        }

        serializeUser(user: Userr, done: Function) {
            console.log('Seriliazer User')
            done(null, user);
        }

      async  deserializeUser(payload: any, done: Function) {
           const user = await this.googleService.findUser(payload.id);
           console.log('Deserialize user')
           console.log(user);
           return user ? done(null, user) : done(null, null)
        }

    }

