import * as dotenv from 'dotenv';
dotenv.config()

interface IEnvironment {
    APP: {
        PORT: string,
        IN_DEVELOPMENT: string
    }
}

export const ENVIRONMENT: IEnvironment = {
    APP: {
        PORT: process.env.PORT,
        IN_DEVELOPMENT: process.env.APP_IN_DEVELOPMENT
    }
}