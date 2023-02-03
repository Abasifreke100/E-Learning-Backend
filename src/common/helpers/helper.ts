import * as bcrypt from 'bcrypt';

export const helperFunction = {
    hashPassword: (password: string) => {
        return bcrypt.hash(password, 10);
    },

    comparePassword: (password: string, hashPassword: string) => {
        return bcrypt.compare(password, hashPassword);
    }
}