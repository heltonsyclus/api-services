const { Router } = require("express");

const UserController = require("./app/controllers/UserController");

const routes = new Router();

routes.get("/login", UserController.loginGet);

module.exports = routes;
