import * as dotenv from 'dotenv';
dotenv.config()

interface IEnvironment {
    APP: {
        PORT: string,
        IN_DEVELOPMENT: string,
        BACKEND_URL: string
    },
    GOOGLE: {
        CLIENT_ID: string,
        SECRET: string
    },
    SMTP: {
        HOST: string,
        USER: string,
        PASSWORD: string
    },
    JWT: {
        SECRET: string,
        REFRESH_TOKEN_SECRET: string,
        REFRESH_TOKEN_EXP_TIME: number,
        ACCOUNT_VERIFICATION_SECRET: string,
        ACCOUNT_VERIFICATION_EXP_TIME: number
    }
}

export const ENVIRONMENT: IEnvironment = {
    APP: {
        PORT: process.env.PORT,
        IN_DEVELOPMENT: process.env.APP_IN_DEVELOPMENT,
        BACKEND_URL: process.env.APP_BACKEND_URL
    },
    GOOGLE: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        SECRET: process.env.GOOGLE_SECRET
    },
    SMTP: {
        HOST: process.env.SMTP_HOST,
        USER: process.env.SMTP_USER,
        PASSWORD: process.env.SMTP_PASS
    },
    JWT: {
        SECRET: process.env.JWT_SECRET,
        REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
        REFRESH_TOKEN_EXP_TIME: +process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
        ACCOUNT_VERIFICATION_SECRET: process.env.JWT_ACCOUNT_VERIFICATON_SECRET,
        ACCOUNT_VERIFICATION_EXP_TIME: +process.env.JWT_ACCOUNT_VERIFICATON_SECRET_EXPIRATION_TIME
    }
}