import { config } from 'dotenv';

config();

const configuration = {
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  server: process.env.SERVER || '',
  database: process.env.DATABASE || '',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};
export default configuration;
