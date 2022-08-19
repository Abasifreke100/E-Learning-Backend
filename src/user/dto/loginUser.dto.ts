import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsEmail,IsDate } from "class-validator"

export class loginUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
    

 }
