import React, { Component } from "react";
import { getUserById, getUserFriends } from "../api";

class User extends Component {
  state = {
    user: [],
    error: "",
    loading: true,
    friends: []
  };

  componentDidMount() {
    getUserById(this.props.id)
      .then(user => {
        this.setState({ user: user, error: "", loading: false });
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.msg });
      });
  }

  friendsClickHandler = e => {
    e.preventDefault();
    e.persist();
    getUserFriends(this.props.id)
      .then(friends => {
        this.setState({
          friends: friends
        });
      })
      .catch(({ response }) => {
        console.log(response);
        this.setState({ error: response, loading: true });
      });
  };

  render() {
    if (this.state.loading === false) {
      return (
        <div className="container ">
          <div className="row  min-vh-100 justify-content-center align-items-center bg-light">
            <div className="card border-dark col-8 mt-3  ">
              <div className="card-body ">
                <div className="card-title font-weight-bold">
                  {this.state.user.name}{" "}
                  <img
                    className="img-thumbnail rounded float-right"
                    src={this.state.user.picture}
                    width="100"
                    height="100"
                    alt="User"
                  />
                </div>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <label className="badge badge-dark">Age:</label>{" "}
                  {this.state.user.age}
                </li>
                <li className="list-group-item">
                  <label className="badge badge-dark">Gender:</label>{" "}
                  {this.state.user.gender}
                </li>
                <li className="list-group-item">
                  <label className="badge badge-dark">Email:</label>{" "}
                  {this.state.user.email}
                </li>
                <li className="list-group-item">
                  <label className="badge badge-dark">Phone:</label>{" "}
                  {this.state.user.phone}
                </li>
                <li className="list-group-item">
                  <label className="badge badge-dark">Address:</label>{" "}
                  {this.state.user.address}
                </li>
                <li className="list-group-item">
                  <label className="badge badge-dark">Date Registered:</label>{" "}
                  {this.state.user.registered.slice(0, 19)}
                </li>
              </ul>
              <div className="card-body">
                <button
                  className="btn btn-success float-right "
                  onClick={this.friendsClickHandler}
                  data-toggle="collapse"
                  data-target="#friendsSection"
                >
                  Show/Hide Friends
                </button>
              </div>
              <div id="friendsSection" className="collapse text-center">
                <ul className="list-group list-group-flush">
                  <h6 className=" font-weight-bold">Friends List:</h6>
                  {this.state.friends.map(friend => {
                    return (
                      <li className="list-group-item" key={friend.id}>
                        <label className="badge badge-dark">
                          {friend.name}
                        </label>{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return "loading";
    }
  }
}

export default User;
