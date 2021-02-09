const passport = require("passport");
const User = require("../models/user.model");
require("./strategies/local.strategy")();

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // Stores the user in the session
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  // Retrives the user from the session
  passport.deserializeUser(function (userId, done) {
    User.findById(userId, function (err, user) {
      done(err, user);
    });
  });
};
