const usersRouter = require("express").Router();
const { getAllUsers } = require("../controllers/users-controller");
//const { handle405 } = require("../errors/errorHandler");

usersRouter.route("/").get(getAllUsers);

module.exports = usersRouter;
