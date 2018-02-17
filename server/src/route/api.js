
var express = require('express');
var router = express.Router();

var database = require('../database');

function getProjects(req, res) {
  const q = {
    query: "SELECT * FROM c where c.type=@type",
    parameters: [{
      name: "@type",
      value: "project"
    }]
  }
  database.find(q)
    .then((projects) => {
      res.json(projects);
    })
    .catch(() => {
      res.sendStatus(500);
    })
}


router.get("/projects", getProjects);

module.exports = router;
