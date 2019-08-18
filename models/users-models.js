const users = require("../data/data.json");

exports.fetchAllUsers = () => {
  return new Promise(function(resolve, reject) {
    resolve(users);
  });
};
