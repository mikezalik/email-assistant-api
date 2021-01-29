const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/keys");

const contentRouter = require("./routes/api/content.router");

const emailContent = require("./models/emailContent");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(config.DATABASE_URL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", contentRouter);

const port = config.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
