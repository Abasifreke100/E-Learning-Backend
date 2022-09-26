// import { IsAlphanumeric } from "class-validator";
import {  IsMobilePhone, IsString, Max, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    name: string;

    @IsString()
    @Column({unique: true})
    email: string;


    @IsString()
    @Column()
    password: string;

    
}