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
      async (username, password, done) => {
        try {
          const user = await User.findOne({ username });
          console.log(user);
          if (user.password === password) {
            done(null, user);
          } else {
            done(null, false);
          }
        } catch (err) {
          console.log("Error from Local Strategy", err);
        }
      }
    )
  );
};
