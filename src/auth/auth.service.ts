import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { userDetails } from '../google/utils/type';
import { Userr } from './User/user';
import { UserEntity } from './User/user.entity';

@Injectable()
export class AuthService {
    findOneBy: any;

    constructor(@InjectRepository(UserEntity,) private readonly signupRepository: Repository<UserEntity>,
   


    ){}

    // the signup logic to save data in DB
    async signup(userData: any): Promise<UserEntity> {
        return this.signupRepository.save(userData);
    }

    //find signup user to login
    async findOne(userDetails:any): Promise<UserEntity> {
        return this.signupRepository.findOneBy(userDetails);
    }

// //Google Login
//     validateUser(details: userDetails){
//         console.log('AuthService');
//         console.log('details');
//     }
}
