const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/keys");

const app = express();

// use body-parser middleware
app.use(bodyParser.json());

// use passport middleware
app.use(passport.initialize());

// load passport strategies
const localRegistrationStrategy = require("./passport/local-registration");
const localLoginStrategy = require("./passport/local-login");

passport.use("local-registration", localRegistrationStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authentication check middleware
const authCheckMiddleware = require("./middleware/auth-check");

// connect to mongodb
mongoose
  .connect(config.DATABASE_URL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// router path
const contentRouter = require("./routes/api/content.router");
const authRouter = require("./routes/api/auth.router");

// use routes
app.use("/api", authCheckMiddleware);
app.use("/auth", authRouter);
app.use("/api", contentRouter);

const port = config.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
