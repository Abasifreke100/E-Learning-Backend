import { BadRequestException, Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordEntity } from './password.entity';

@Injectable()
export class ForgotPasswordService {
    constructor(
        @InjectRepository(PasswordEntity) private readonly passwordRepository: Repository<PasswordEntity>
    ){}

    async create(body: any){
        return this.passwordRepository.save(body);
    }

async findOne(data: any){
    return this.passwordRepository.findOneBy(data);
}
   
}
