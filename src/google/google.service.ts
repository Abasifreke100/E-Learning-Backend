import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { userDetails } from "./utils/type";
import { Userr } from "../auth/User/user";

@Injectable()
export class GoogleService {
    constructor( @InjectRepository(Userr) private readonly userRepository: Repository<Userr>){

    }

    //Google Login
    async validateUser(details: userDetails){
        console.log('GoogleService');
        console.log(details);

        const user = await this.userRepository.findOneBy({email: details.email})
        console.log(user);
        if(user)
            return user;
            console.log('user not found. Creating....');
            const newUser = this.userRepository.create(details);
            return this.userRepository.save(newUser);
        
        
    }

    async findUser(id: number){
        const user = await this.userRepository.findOneBy({id});
        return user;

    }
}