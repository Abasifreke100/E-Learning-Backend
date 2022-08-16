import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsEmail,IsDate } from "class-validator"

export class CreateUserDto {
   
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    dob: string
    @IsNotEmpty()
    @IsNumber()
    phone: number
    @IsNotEmpty()
    @IsEmail()
    email: string
    @IsNotEmpty()
    @IsString()
    password: string
    @IsNotEmpty()
    @IsString()
    role: string
  
}
