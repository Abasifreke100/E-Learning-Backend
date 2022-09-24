import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { GoogleAuthGuard } from "../utils/Guards";

@Controller('api')
export class GoogleController {

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
    return{msg: 'Login Successful'}
}

@Get('status')
user(@Req() request: Request) {
  console.log(request.user);
  if(request.user){
    return{
      msg: 'Authenticated'
    }

    }else{
      return{
        msg: 'Not Authenticated'
      }
    }
  }
}

