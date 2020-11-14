import express from 'express';
import cors from 'cors';
import router from './routes';

const api = express();

api.use(cors());
api.use(express.urlencoded({ extended: false }));
api.use(express.json());

api.use(router);

const porta = process.env.PORT ? process.env.PORT : 3333;

api.listen(porta, () => console.log(`Servidor Rodando na porta: ${porta}`));
