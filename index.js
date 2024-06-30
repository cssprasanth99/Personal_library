const express = require("express");
const connection = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    console.log("There is error in connection");
  }
});
