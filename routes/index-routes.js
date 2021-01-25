const path = require("path");
const router = require("express").Router();

// on landing, root page, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
