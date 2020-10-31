import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', async (request: Request, response: Response) => {
  const { name } = request.query;

  console.log(name);

  return response.json({ message: `fala ${name}` });
});

export default routes;
