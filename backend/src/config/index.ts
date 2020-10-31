import { ConnectionPool } from 'mssql';
import connectionConfig from './configDatabase';

export default async function connection() {
  const sql = 'SELECT name FROM sys.databases';
  const sql1 = 'USE Northwind';
  const sql2 = 'SELECT * FROM Orders';

  const run = async () => {
    const pool = new ConnectionPool(connectionConfig);
    await pool.connect();

    const resultado = await pool.request().query(sql);
    const resultado1 = await pool.request().query(sql1);
    const resultado2 = await pool.request().query(sql2);

    console.log(resultado);
    console.log(resultado1);
    console.log(resultado2);
  };

  run();
}
