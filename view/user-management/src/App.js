import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Users from "./components/users/Users.jsx";
import User from "./components/User.jsx";

function App() {
  return (
    <div className="App h-100">
      <Header />
      <Router>
        <Users path="/" />
        <Users path="/users" />
        <User path="/users/:id" />
      </Router>
    </div>
  );
}

export default App;
