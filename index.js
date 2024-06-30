const express = require("express");
const connection = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = 8080;
const authRoute = require("./routes/authRoute");
const bookRoute = require("./routes/bookRoute");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use("/api/authRoute", authRoute);
app.use("/api/bookRoute", bookRoute);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
