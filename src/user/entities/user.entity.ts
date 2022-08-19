import { Select } from '@mui/material';
import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';



@Entity('users')
export class UserEntity{
  
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
     dob: string;

    
    // @Column()
    // phone: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;
}
