import { Router, Request, Response } from 'express';
import { pool } from '../config';

const routes = Router();

routes.get('/procedure1', async (request: Request, response: Response) => {
  const sql2 =
    "SELECT FirstName +' '+ LastName as [Nome Completo],Country as Pais   FROM Employees";

  const { recordset } = await pool.request().query(sql2);

  pool.close();
  return response.json(recordset);
});

export default routes;
