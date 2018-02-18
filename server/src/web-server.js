const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const routeApi = require("./route/api")
const routeHome = require("./route/home")

class WebServer {
  constructor(options) {
    if (!options) {
      throw new Error("options missing")
    }
    this.options = options;
    if (this.options.authorize === undefined)
      this.options.authorize = true;
    if (this.options.logging === undefined)
      this.options.logging = true;
  }

  listen() {
    return new Promise((resolve, reject) => {
      if (!this.options.port) {
        reject(new Error("port not set"));
      }
      var api = this.server.listen(this.options.port, () => {
        resolve(api);
      });
    });
  }

  createServer() {
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(cors());

    if (this.options.logging) {
      app.use(logger('dev'));
    }

    app.use("/", routeHome);

    app.use("/api/v1/", routeApi);

    this.server = http.createServer(app);

    this.server.on('close', () => {
      if (this.options.logging) {
        console.log("server closed");
      }
    })
  }
}

module.exports = WebServer;
