import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';



@Entity("user")
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    dob: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;


}
