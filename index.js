const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/routes");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Running App");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

app.use(express.json(), cors());

app.use("/users/", authRoute);
