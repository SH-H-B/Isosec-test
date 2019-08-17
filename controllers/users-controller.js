const { fetchAllUsers } = require("../models/users-models");

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then(users => {
      if (!users || users.length === 0) {
        return Promise.reject({ status: 404, msg: "No users found" });
      }

      return res.status(200).send({ users });
    })
    .catch(next);
};
