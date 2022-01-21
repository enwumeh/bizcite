const  Pool = require("pg").Pool;
require("dotenv").config();

// const pool = new Pool({
//   user: 'emmaadaoranwumeh',
//   host: 'localhost',
//   database: 'oilsite',
//   password: 'peacesign',
//   port: 5432,
// });

// const devConfig = new Pool({
//   user: 'process.env.PG_USER',
//   host: 'localhost',
//   database: process.env,
//   password: 'process.env.PG_PASSWORD',
//   port: process.env.PG_PORT,
// });
// const devConfig = {
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// };
// let ssl = null;
// if (process.env.NODE_ENV === 'development') {
//    ssl = {rejectUnauthorized: false};
// }

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL;
console.log("ProConfig ====>", proConfig) //heroku addon
console.log("DevConfig ====>", devConfig) //heroku addon




const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
  // ssl: { rejectUnauthorized: false }
  // ssl: false 

  // ssl: ssl


    // process.env.NODE_ENV === 'production' ? devConfig :  proConfig
  
}); //heroku addon
// console.log("CONNECTEDSTRING ====>", pool) //heroku addon


// console.log("LETS SEE", pool.query('select * from oils'))


// const getUserById = () => {
//   // const id = parseInt(request.params.id)
 
//   pool.query('SELECT * FROM oils',(error, results) => {
//    if (error) {
//     throw error
//    }
//    console.log("Results!!:",results)
//   })
// }
// getUserById()
 
module.exports = pool;