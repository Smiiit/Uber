const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Error connecting to Database", err);
    });
}

module.exports = connectToDb;

// DB_CONNECT=mongodb://127.0.0.1:27017/uber : Local MongoDB Connection String
