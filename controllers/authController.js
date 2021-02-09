const User = require("../models/user.model");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    console.log("===== user ======");
    console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { username, password } = req.body;
    // ADD VALIDATION
    User.findOne({ username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, please choose another username: ${username}`,
        });
      }
      const newUser = new User({
        username,
        password,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },
  logout: (req, res) => {
    if (req.user) {
      console.log("Logging Out!");
      req.session.destroy();
      res.clearCookie("connect.sid"); // clean up!
      return res.json({ msg: "App is logging you out!" });
    } else {
      return res.json({ msg: "Not applicable, no user to sign out!" });
    }
  },
  auth: function (req, res, next) {
    console.log(req.body);
    console.log("================");
    next();
  },
  authenticate: (req, res) => {
    console.log("POST to /login");
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      console.log(`Deleting ${cleanUser.password}`);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  },
};
