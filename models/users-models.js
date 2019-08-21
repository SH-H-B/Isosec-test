const users = require("../data/data.json");

exports.fetchAllUsers = ({ amount, query }) => {
  return new Promise(function(resolve, reject) {
    if (amount === undefined && query === undefined) {
      resolve(users);
    } else if (amount !== undefined && query === undefined) {
      const newUsers = users.slice(0, amount);
      resolve(newUsers);
    } else if (amount === undefined && query !== undefined) {
      let newUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(query.toLowerCase());
      });
      resolve(newUsers);
    } else {
      reject("error");
    }
  });
};

exports.fetchUserById = ({ id }) => {
  return new Promise(function(resolve, reject) {
    if (isNaN(parseInt(id))) {
      reject("ID should be a number");
    } else {
      let user = users.filter(user => {
        return user.index == id;
      });

      if (user.length !== 0) {
        resolve(user);
      } else {
        reject("error");
      }
    }
  });
};

exports.fetchUserFriend = ({ id }) => {
  return new Promise(function(resolve, reject) {
    let user = users.filter(user => {
      return user.index == id;
    });
    if (user.length !== 0) {
      resolve(user[0].friends);
    } else {
      reject("error");
    }
  });
};
