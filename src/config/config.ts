import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  MASTER_USERNAME: process.env.MASTER_USERNAME,
  MASTER_PASSWORD: process.env.MASTER_PASSWORD,
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'https://www.evxlab.co.in'
};