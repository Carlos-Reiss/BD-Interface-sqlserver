import express from 'express';
import router from './routes';
import { pool } from './config';

const api = express();

api.use(express.urlencoded({ extended: false }));
api.use(express.json());

const runConnection = async () => {
  await pool.connect();
};

runConnection();

api.use(router);

api.listen(3333, () => console.log('Server running'));
