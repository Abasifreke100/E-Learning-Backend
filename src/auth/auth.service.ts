import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { authEntity } from './auth-entity/auth.entity';
import { userDetails } from './utils/type';
import { Userr } from './User/user';

@Injectable()
export class AuthService {
    findOneBy: any;

    constructor(@InjectRepository(authEntity,) private readonly signupRepository: Repository<authEntity>,
   


    ){}

    // the signup logic to save data in DB
    async signup(userData: any): Promise<authEntity> {
        return this.signupRepository.save(userData);
    }

    //find signup user to login
    async findOne(userDetails:any): Promise<authEntity> {
        return this.signupRepository.findOneBy(userDetails);
    }

// //Google Login
//     validateUser(details: userDetails){
//         console.log('AuthService');
//         console.log('details');
//     }
}
