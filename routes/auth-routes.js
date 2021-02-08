const express = require("express");
const passport = require("passport");

const authRouter = express.Router();
const User = require("../models/user.model");

function router() {
  authRouter.route("/sign-up").post((req, res) => {
    const { username, password } = req.body;
    (async function createUser() {
      try {
        const dbUser = await User.create({
          username,
          password,
        });
        // console.log("From Auth Routes", dbUser);
        // login information stored in a cookie, deletes when server restarts
        req.login(dbUser, () => {
          // redirect to another page after user logs in
          res.redirect("/api/auth/profile");
        });
      } catch (err) {
        console.log(err);
      }
    })();
  });
  authRouter
    .route("/sign-in")
    .get((req, res) => {
      res.send("Sign-In Page");
    })
    .post(
      passport.authenticate("local", {
        successRedirect: "/api/auth/profile",
        failureRedirect: "/",
      })
    );
  authRouter
    .route("/profile")
    .all((req, res, next) => {
      if (req.user) {
        next();
      } else {
        res.redirect("/");
      }
    })
    .get((req, res) => {
      console.log("HI");
    });
  return authRouter;
}

module.exports = router();
