import { Password } from '@mui/icons-material';
import { Select } from '@mui/material';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { loginUserDto } from './dto/loginUser.dto';
import { UserEntity } from './entities/user.entity';
import { User } from "./user.model";
@Injectable()
export class UserService{
    
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository <UserEntity>,

        private authService: AuthService

        ){} 

async signUp(data:any): Promise<UserEntity>{
    return this.userRepository.save(data);
}


         
// login(loginUsersDto: loginUserDto): Observable<string>{
// return this.findUserByEmail(loginUsersDto.email).pipe(
//     switchMap((user: UserEntity) => this.validatePassword(loginUsersDto.password, user.password).pipe(
//         map((PasswordsMatches: boolean) => {
//             if(PasswordsMatches){
//                 return 'login was successful'
//             } else {
//                 throw new HttpException('login was successful', HttpStatus.UNAUTHORIZED);
//             }
//         })
//     )
//     ) 
// )
// }

//         findAll(): Observable<UserEntity[]> {
//             return from(this.userRepository.find());
//         }

//         findUserByEmail(email: string): Observable<UserEntity>{
//             return from(this.userRepository.findOneBy({email}));
//         }


//     validatePassword(password: string, storedPasswordHash: string): Observable<boolean>{
//     return this.authService.comparePasswords(password, storedPasswordHash)
//     }

//     private mailExists(email: string ): Observable <boolean>{
//         return from (this.userRepository.findOneBy({email})).pipe(
//             map((user: User)=> {
//                 if(!user){
//                     return true;
//                 } else{
//                     return false;
//                 }
//             })
//         )
//     }
// } 
}