
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

function getProjectByProjectId(req, res) {
  const id = req.params.projectId;
  const q = {
    query: "SELECT * FROM c WHERE c.type=@type AND c.id=@id",
    parameters: [
      { name: "@type",  value: "project"    },
      { name: "@id",  value: id    }
    ]
  }
  database.find(q)
    .then((projects) => {
      if (projects && projects.length > 0) {
        res.json(projects[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    })
}

function getPagesByProjectId(req, res) {
  const projectId = req.params.projectId;
  const q = {
    query: "SELECT * FROM c WHERE c.type=@type AND c.projectId=@projectId",
    parameters: [
      { name: "@type",  value: "page"    },
      { name: "@projectId",  value: projectId    }
    ]
  }
  database.find(q)
    .then((pages) => {
        res.json(pages);
    })
    .catch(() => {
      res.sendStatus(500);
    })
}

router.get("/projects", getProjects);
router.get("/projects/:projectId", getProjectByProjectId);

router.get("/projects/:projectId/pages", getPagesByProjectId);


module.exports = router;
