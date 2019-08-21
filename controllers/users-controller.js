const {
  fetchAllUsers,
  fetchUserById,
  fetchUserFriend
} = require("../models/users-models");

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers(req.query)
    .then(users => {
      if (!users || users.length === 0) {
        return Promise.reject({ status: 404, msg: "No users found" });
      }
      return res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUserById = (req, res, next) => {
  fetchUserById(req.params)
    .then(([user]) => {
      return res.status(200).send({ user });
    })
    .catch(function(err) {
      if (err == "ID should be a number") {
        return res.status(400).send(err);
      } else if ((err.status = 404)) {
        res.status(404).send(err);
      } else {
        next;
      }
    });
};

exports.getUserFriends = (req, res, next) => {
  fetchUserFriend(req.params)
    .then(friends => {
      if (!friends) {
        return Promise.reject({ status: 404, msg: "No information found" });
      }
      return res.status(200).send({ friends });
    })
    .catch(next);
};
