const { Pool } = require("pg")

const pool = new Pool({
  user: 'emmaadaoranwumeh',
  host: 'localhost',
  database: 'oilsite',
  password: 'peacesign',
  port: 5432, 
});


module.exports = {
  query: (text, params) => pool.query(text, params),
};