const passport = require("passport");
const { Strategy } = require("passport-local");

const User = require("../../models/user.model");

module.exports = function localStrategy() {
  passport.use(
    new Strategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      // Strategy takes a function
      (username, password, done) => {
        (async function findUser() {
          try {
            const dbUser = await User.findOne({ username });
            if (dbUser.password === password) {
              done(null, dbUser);
            } else {
              done(null, false);
            }
          } catch (err) {
            console.log(err);
          }
        })();
      }
    )
  );
};
