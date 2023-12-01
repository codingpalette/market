// mysql2 를 이용해서 디비 연결을 해준다.

import mysql from 'mysql2/promise';

// const pool = mysql.createPool(config.mysql);

export async function connectDb() {
  // 디비 연결
  return mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306,
  })
}
