const express = require("express");
const passport = require("passport");

const authRouter = express.Router();
const User = require("../models/user.model");

function router() {
  authRouter.route("/sign-up").post((req, res) => {
    const { username, password } = req.body;
    console.log(username);
    (async function createUser() {
      try {
        const dbUser = await User.create({
          username,
          password,
        });
        console.log("From Auth Routes", dbUser);
        // login information stored in a cookie, deletes when server restarts
        req.logIn(dbUser, () => {
          // redirect to another page after user logs in
          res.json(dbUser);
        });
      } catch (err) {
        console.log(err);
      }
    })();
  });
  authRouter.route("/sign-in").post(function (req, res, next) {
    passport.authenticate("local", function (err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/auth/sign-up");
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  });

  authRouter
    .route("/profile")
    .all((req, res, next) => {
      if (req.user) {
        next();
      } else {
        console.log("user not logged in");
      }
    })
    .get((req, res) => {
      console.log("HI");
    });
  return authRouter;
}

module.exports = router();
