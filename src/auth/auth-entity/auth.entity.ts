// import { IsAlphanumeric } from "class-validator";
import {  IsMobilePhone, Max, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class authEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    dob: string;
    
    @Column({
        type: "bigint"
    })
    @IsMobilePhone()
    @Min(0)
    @Max(20)
    phone: number

    @Column()
    role: string;
}