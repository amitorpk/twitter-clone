const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");

const app = express();

const port = 3000;

//to parse the request body
app.use(bodyParser.json()); // content-type:application/json

// to make express app serve static files
app.use("public", express.static(path.join("__dirname", "public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);
app.use("/", homeRoutes);

// error handle middleware
app.use((error, req, res, next) => {
  status_code = error.status_code;
  message = error.message;

  res.status.json({
    message: message,
    error: error.errors,
  });
});

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_NAME,
  })
  .then((result) => {
    console.log("\n twitter-app is listening on port", port);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
