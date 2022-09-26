const express = require("express");
const path = require("path")

const initMiddleware = (app) => {
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.static('static'));
};

module.exports = initMiddleware;