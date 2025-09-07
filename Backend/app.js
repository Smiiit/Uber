const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectToDb = require("./db/db.js");
const userRoutes = require("./routes/user.routes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.get("/", (req, res) => {
  res.send("Radhe Radhe! Server is up and running.");
});

app.use("/api/users", userRoutes);

module.exports = app;
