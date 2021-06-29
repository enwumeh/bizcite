const { Client } = require("pg")

const client = new Client({
  user: 'emmaadaoranwumeh',
  host: 'localhost',
  database: 'oilsite',
  password: 'peacesign',
  port: 5432, 
});


module.exports = {
  query: (text, params) => client.query(text, params),
};