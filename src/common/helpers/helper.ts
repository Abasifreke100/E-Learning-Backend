import * as bcrypt from 'bcrypt';

export const helperFunction = {
    hashPassword: (password: string) => {
        return bcrypt.hash(password, 10);
    },

    comparePassword: (password: string, hashPassword: string) => {
        return bcrypt.compare(password, hashPassword);
    },

    generateOtp: (length: number) => {
        let string = ''
        let num = [1,2,3,4,5,6,7,8,9,0]

        for(let i = 0; i < length; i++){
            string += num[Math.floor(Math.random() * num.length)]
            console.log(string)
        }

        console.log(string)
        return string; 
    } 
} 