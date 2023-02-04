import * as bcrypt from 'bcrypt';
import crypto from 'crypto';

export const helperFunction = {
    hashPassword: (password: string) => {
        return bcrypt.hash(password, 10);
    },

    comparePassword: (password: string, hashPassword: string) => {
        return bcrypt.compare(password, hashPassword);
    },

    generateRandomString: (length: number) => {
        return crypto.randomBytes(length).toString('hex')
    } 
} 