// Imports
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const path = require("path");
const apiRouter = require("./apiRouter").router;

// Instantiate server
const server = express();

//Init helmet
server.use(helmet());

// Init PORT
const PORT = process.env.PORT || 8080;

// Headers for CORS
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Test Route ( main entrance )
server.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Welcome to O'Clock Game API</h1>");
});

// Call api router
server.use("/api/", apiRouter);

// Launch server
server.listen(PORT, async () => {
  console.log(` ---- Server listening on ${PORT} ---- `);
});
