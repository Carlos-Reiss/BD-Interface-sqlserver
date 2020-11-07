import { Router, Request, Response } from 'express';
import { pool } from '../config';

const routes = Router();

const sql2 =
  "SELECT FirstName +' '+ LastName as [Nome Completo],Country   FROM Employees";

routes.get('/', async (request: Request, response: Response) => {
  await pool.connect();

  const resultado2 = await pool.request().query(sql2);

  pool.close();
  return response.json(resultado2);
});

export default routes;
