import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GoogleEntity{
    @PrimaryGeneratedColumn()
    id: number;


    @IsString()
    @Column()
    displayName: string;


    @IsString()
    @Column()
    email: string;


}