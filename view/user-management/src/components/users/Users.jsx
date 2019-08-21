import React, { Component } from "react";
import { getUsers } from "../../api";
import UserRow from "./UserRow";
import Search from "./Search";

class Users extends Component {
  state = { users: [], error: "", searchInput: "" };

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({ users: users, error: "" });
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.msg });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      getUsers({
        query: this.state.searchInput
      })
        .then(users => {
          this.setState({ users: users, error: "" });
        })
        .catch(({ response }) => {
          this.setState({ error: response.data.msg });
        });
    }
  }

  render() {
    let tableClassName =
      this.state.error.length === 0 && this.state.searchInput.length !== 1
        ? "d-block"
        : "d-none";

    let errorClassName =
      this.state.error.length === 0
        ? "d-none "
        : "d-block font-weight-bold ml-3";

    return (
      <React.Fragment>
        <div className="container mt-4">
          <Search searchInputHandler={this.searchInputHandler} />
          <div id="errorSection" className={errorClassName}>
            {this.state.error}
          </div>
          <div id="tableSection" className={tableClassName}>
            <h4>User Management</h4>
            <div className="table-responsive">
              <table className="table table-dark ">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
  searchInputHandler = e => {
    this.setState({ searchInput: e.target.value });
  };
}

export default Users;
