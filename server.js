// Dependencies
const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const mongoose = require("mongoose");
<<<<<<< HEAD
const path = require("path");
require('dotenv').config()
=======
const cookieParser = require("cookie-parser");
const session = require("express-session");
>>>>>>> 3c55ea3f9ade381e6a16dbc0ae36fb3a23337fcf

// Sets up the Express App
const PORT = process.env.PORT || 8080;
const app = express();

// Sets up Morgan tool
app.use(morgan("tiny"));

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "elites" }));

require("./config/passport.js")(app);

// Routes
// =============================================================
const profileRouter = require("./routes/profile-routes");
const authRouter = require("./routes/auth-routes");

app.use("/api/auth", authRouter);
app.use("/api/profiles", profileRouter);

// Addn'l Middleware (something that is executed when everything comes in...)
// =============================================================
// Middleware if lands on unknown route
app.use((req, res, next) => {
  const err = new Error("Page Not Found!");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  // assign error status to the error that has been passed from the above middleware
  // or if the error originated in another portion of app, assign 500 (Internal Server Error) status
  res.status(err.status || 500);
  res.json({
    err: {
      message: err.message,
    },
  });
});

// Sets up the MongoDB / Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  // Starting our Express app on connection to MongoDB
  console.log(`connected to ${chalk.green("MongoDB")}`);
  app.listen(PORT, () => {
    console.log(`listening on PORT ${chalk.green(PORT)}`);
  });
});

