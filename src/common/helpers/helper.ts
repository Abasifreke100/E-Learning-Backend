import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

export const helperFunction = {
  hashData: (data: string) => {
    return bcrypt.hash(data, 10);
  },

  compareHashedData: (data: string, hashedData: string) => {
    return bcrypt.compare(data, hashedData);
  },

  generateRandomString: (length: number) => {
    return crypto.randomBytes(length).toString('hex');
  },
};
