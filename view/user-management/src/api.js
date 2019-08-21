import Axios from "axios";

const url = "http://localhost:9090/api";

export const getUsers = query => {
  return Axios.get(`${url}/users`, { params: query }).then(
    ({ data: { users } }) => {
      return users;
    }
  );
};

export const getUserById = id => {
  return Axios.get(`${url}/users/${id}`).then(({ data: { user } }) => {
    return user;
  });
};

export const getUserFriends = id => {
  return Axios.get(`${url}/users/${id}/friends`).then(
    ({ data: { friends } }) => {
      return friends;
    }
  );
};
