import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
const bcrypt = require ('bcrypt');
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from '../user/dto/user.entity';

@Injectable()
export class AuthService {
    
    hashPassword(password: string): Observable<string>{
        return from<string>(bcrypt.hash(password, 12));

    }
    
    comparePasswords(password: string, storedPasswordHash: string): Observable<any>{
        return from(bcrypt.compare(password, storedPasswordHash));
    }
//     constructor(
//         @InjectRepository(User) private readonly userRepository: Repository <User>

//         ){} 

//         async create(data: any): Promise<User> {
//             return this.userRepository.save(data);
//         }

//         async findOne(condition:any){
//             return this.userRepository.findOne(condition);
//         }



// // async validateUser(email: string, password: string): Promise <any>{
// //     const user = await this.userService.findOne({email});
// //     if(email && user.password === password){
// //         const {password, email, ...rest} =user;
// //         return rest;
// //     }
// //     return null;
// // }






//         // async register (data:any): Promise <User> {
//         //     return this.userRepository.save(data);
//         // }

//         // async findOne(condition: any): Promise<any> {
//         //    return this.userRepository.findOne(condition);

//             // if (user && user.password === password){
//             //     const{password, email, ...rest} = user;
//             //     return rest;
//             // }
//             // return null;

            

//         }
    


}