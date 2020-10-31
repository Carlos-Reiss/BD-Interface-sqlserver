import express from 'express';
import router from './routes';
import connection from './config';

const api = express();

connection();

api.use(express.urlencoded({ extended: false }));
api.use(express.json());

api.use(router);

api.listen(3333, () => console.log('Server running'));