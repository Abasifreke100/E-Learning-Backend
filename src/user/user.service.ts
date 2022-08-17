import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
    import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
@Injectable()
export class UserService {
constructor(
  @InjectRepository(User)
  private userRepository: Repository<User>,
) {}


  async create(newUser: CreateUserDto) {
    const user = this.userRepository.create(newUser)
    await this.userRepository.save(user)
    return user 
    // 'This action adds a new user';
  }

  async findAll():Promise<User[]> {
    return await this.userRepository.find() 
    // `This action returns all users`;
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }


  async findOne(id: string):Promise<User> {
    return  await this.userRepository.findOneBy({id});
    //  `This action returns a #${id} user`;
  }

  async update(id: string, UserDto: UserDto):Promise<User> {
    await this.userRepository.update({ id }, UserDto);
    return await this.userRepository.findOne({ where: { id: id }});
    // return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.userRepository.delete({ id });
    return { deleted: true };
    // return `This action removes a #${id} user`;
  }
}
