const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db.js");

const app = express();

connectToDb();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Radhe Radhe! Server is up and running.");
});

module.exports = app;
