import * as dotenv from 'dotenv';

dotenv.config();

export default {
  mongoURI: process.env.DATABASE,
};