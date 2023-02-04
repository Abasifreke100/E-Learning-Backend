import * as dotenv from 'dotenv';
dotenv.config()

interface IEnvironment {
    APP: {
        PORT: string,
        IN_DEVELOPMENT: string
    },
    GOOGLE: {
        CLIENT_ID: string,
        SECRET: string
    },
    SMTP: {
        HOST: string,
        USER: string,
        PASSWORD: string
    }
}

export const ENVIRONMENT: IEnvironment = {
    APP: {
        PORT: process.env.PORT,
        IN_DEVELOPMENT: process.env.APP_IN_DEVELOPMENT
    },
    GOOGLE: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        SECRET: process.env.GOOGLE_SECRET
    },
    SMTP: {
        HOST: process.env.SMTP_HOST,
        USER: process.env.SMTP_USER,
        PASSWORD: process.env.SMTP_PASS
    }
}