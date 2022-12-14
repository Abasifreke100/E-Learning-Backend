import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PasswordEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    email: string;


    @IsString()
    @Column({unique: true})
    token: string;

}