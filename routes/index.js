const express = require("express");
const router = express.Router;

require("./profiles")(router);

module.exports = router;
