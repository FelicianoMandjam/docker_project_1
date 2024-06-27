const express = require("express");
const cors = require("cors");

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// URLS API PREFIX
app.use("/api/docker", (req, res) => {
  res.status(200).json("API DOCKER 😎");
});

module.exports = app;
