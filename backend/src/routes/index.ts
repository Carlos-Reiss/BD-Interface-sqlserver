import { Router, Request, Response } from 'express';
import pool from '../config';

const routes = Router();

routes.get('/authors', async (request: Request, response: Response) => {
  await pool.connect();

  const query = `SELECT au_fname +' '+ au_lname as [nome] FROM authors`;

  const { recordset: nomes } = await pool.request().query(query);

  pool.close();
  return response.json(nomes);
});

routes.get('/bestsellers', async (request: Request, response: Response) => {
  await pool.connect();

  // --MOSTRAR OS LIVROS DO AUTOR CONSIDERADOS BESTSELLERS / LIVROS QUE FORMA VENDIDOS EM 3 OU MAIS PEDIDOS
  const { name, lastname } = request.query;

  const sql = `EXEC BESTSELLERS ${name},'${lastname}';`;

  const { recordset } = await pool.request().query(sql);

  pool.close();
  return response.json(recordset);
});

export default routes;
