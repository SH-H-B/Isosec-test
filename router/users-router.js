const usersRouter = require("express").Router();
const {
  getAllUsers,
  getUserById,
  getUserFriends
} = require("../controllers/users-controller");
//const { handle405 } = require("../errors/errorHandler");

usersRouter.route("/").get(getAllUsers);
usersRouter.route("/:id").get(getUserById);
usersRouter.route("/:id/friends").get(getUserFriends);

module.exports = usersRouter;
