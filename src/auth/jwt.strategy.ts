import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
constructor(){
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: ''
    });
}

async validate(payload: any) {
    return {
        id: payload.sub,
        name: payload.name,
    };
}
}