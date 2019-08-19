import Axios from "axios";

const url = "http://localhost:9090/api";

export const getUsers = query => {
  return Axios.get(`${url}/users`, { params: query }).then(
    ({ data: { users } }) => {
      console.log(users);
      return users;
    }
  );
};
