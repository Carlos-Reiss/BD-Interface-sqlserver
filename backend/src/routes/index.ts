import { Router, Request, Response } from 'express';
import pool from '../config';

const routes = Router();

routes.get('/employers', async (request: Request, response: Response) => {
  await pool.connect();

  const query = `SELECT emp_id as id, fname as name, lname as sobrenome, j.job_desc as job, p.pub_name as publicadora
  FROM employee as e JOIN jobs j
  ON j.job_id = e.job_id
  JOIN publishers p
  ON p.pub_id = e.pub_id`;

  const { recordset: employers } = await pool.request().query(query);

  pool.close();
  return response.json(employers);
});

routes.get('/jobs', async (request: Request, response: Response) => {
  await pool.connect();

  const query = `SELECT job_id as id,job_desc as job FROM jobs`;

  const { recordset: jobs } = await pool.request().query(query);

  pool.close();
  return response.json(jobs);
});

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

routes.get('/publishers', async (request: Request, response: Response) => {
  await pool.connect();

  const sql = `SELECT pub_id as id , pub_name as nome from publishers`;

  const { recordset: publishers } = await pool.request().query(sql);

  pool.close();
  return response.json(publishers);
});

export default routes;
