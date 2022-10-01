import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { userDetails } from "./utils/type";
import { Userr } from "./utils/user";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class GoogleService {
    constructor( @InjectRepository(Userr) private readonly userRepository: Repository<Userr>,
    private mailerService: MailerService
    ){

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
        //   await this.userRepository.save(newUser);

           

            return this.userRepository.save(newUser);
        
        
    }

    async findUser(id: number){
        const user = await this.userRepository.findOneBy({id});
        return user;

    }
}