
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class Userr{
@PrimaryGeneratedColumn()
id: number;

@Column()
displayName: string;


@Column()
email: string;


}