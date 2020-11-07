import { ConnectionPool } from 'mssql';
import connectionConfig from './configDatabase';

export const pool = new ConnectionPool(connectionConfig);
