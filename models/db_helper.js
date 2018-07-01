
// 公共部分独立出来
// 配置数据库
const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'node'
});

module.exports = pool;

