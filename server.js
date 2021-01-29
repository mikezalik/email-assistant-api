const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/keys");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(config.DATABASE_URL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const port = config.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
