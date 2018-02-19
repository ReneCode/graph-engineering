var express = require('express');
var router = express.Router();

function getHome(req, res) {
  res.send("graph-engineering-backend");
}

router.get("/", getHome);


module.exports = router;
