import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { GoogleService } from "./google.service";
import { GoogleAuthGuard } from "./utils/Guards";

@Controller('api')
export class GoogleController {
constructor(private readonly googleService:GoogleService){

}



  
@Get('google/login')
    @UseGuards(GoogleAuthGuard)
  handleLogin(){
return {
  msg: 'Google Authentication'
}
  }

@Get('google/redirect') //redirect end point
 @UseGuards(GoogleAuthGuard)
handleRedirect(){


    return{msg: 'login sucessful'}
}



@Get('status')
user(@Req() request: Request) {
  console.log(request.user);
  if(request.user){
    return request.user;

    }else{
      return{
        msg: 'Not Authenticated'
      }
    }
  }
}

