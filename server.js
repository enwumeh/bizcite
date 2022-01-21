require("dotenv").config();
const express = require("express");
const db = require("./db/index.js");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3002;

//process.env.PORT
//process.env.NODE_ENV => prodution or undefined

//ALL OILS
app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "client/build")));
if (process.env.NODE_ENV === "production") {
  
  app.use(express.static(path.join(__dirname, "client/build")));
  console.log(path.join(__dirname, "client/build"));

}

//middleware
// app.use(function (_req, res, next) {
//   res.header("Access-Control-Allow-Origin", process.env.CLIENT_APP_URL);

//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );

//   next();
// });


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.get("/api/v1/oils", async (req, res) => {
  try {
    const oilsQuery = await db.query("SELECT * FROM oils");
    // console.log(oilsQuery)
    res.status(200).json({
      status: "success",
      data: {
        length: oilsQuery.rowCount,
        oils: oilsQuery.rows
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//ONE OIL
app.get("/api/v1/oils/:id", async (req, res) => {
  try {
    const oilQuery = await db.query("SELECT * FROM oils where id = $1", [
      req.params.id
    ]);
    console.log(oilQuery);
    res.status(200).json({
      status: "success",
      data: {
        oil: oilQuery.rows
        // oil: "jeisdfohjenlkp"

      }
      
    });
  } catch (err) {
    console.log(err);
  }
});

//CREATING AN OIL ENTRY
app.post("/api/v1/oils", async (req, res) => {
  try {
    const oilQuery = await db.query(
      "INSERT INTO oils (name, companytype, price, stock) VALUES ($1, $2, $3, $4) returning *",
      [req.body.name, req.body.companytype, req.body.price, req.body.stock]
    );
    console.log(oilQuery);
    res.status(201).json({
      status: "success",
      data: {
        oils: req.body
      }
    });
  } catch (err) {
    console.log("MISTAKE WRONG", err);
  }
});

//UPDATING AN OIL ENTRY
app.put("/api/v1/oils/:id", async (req, res) => {
  try {
    const oilQuery = await db.query(
      "UPDATE oils SET name = $1, companytype = $2, price = $3, stock = $4 WHERE id = $5 returning *",
      [
        req.body.name,
        req.body.companytype,
        req.body.price,
        req.body.stock,
        req.params.id
      ]
    );
    console.log(oilQuery);
    res.status(200).json({
      status: "success",
      data: {
        oil: oilQuery.rows
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//DELETING AN OIL ENTRY
app.delete("/api/v1/oils/:id", async (req, res) => {
  try {
    const DELETED = await db.query(
      "DELETE FROM oils WHERE id = $1 returning *",
      [req.params.id]
    );
    // console.log(DELETED)
    res.status(204).json({
      status: "success",
      data: DELETED
    });
  } catch (err) {
    console.log("Error:", err);
  }
});

// if theres not a defined routes, go to build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build'));
});


app.listen(port, () => {
  console.log(`server is live! listening on port ${port}`);
});



// const funct = async () => {
//   try {
//     const oilsQuery = await db.query("SELECT * FROM oils");
//     console.log("oilsQuery:", oilsQuery)
//    }
  
//   catch(err) {
//     console.log("Error:", err)
//   }
//  }
//  funct()

// console.log("PATH HERE==>", process.env.PG_USER);

// exports.app = functions.https.onRequest(app);


  // makes it much easier to shorten url. helps with production: in production, proxy will be ignored
