import { ConnectionPool } from 'mssql';
import connectionConfig from './configDatabase';

const pool = new ConnectionPool(connectionConfig);

export default pool;
