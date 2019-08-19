import React, { Component } from "react";
import { getUsers } from "../../api";
import UserRow from "./UserRow";

class Users extends Component {
  state = { users: [] };

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({ users: users });
      })
      .catch();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mb-4">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Forename</th>
                <th scope="col">Surname</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => {
                return <UserRow user={user} key={user.index} />;
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
