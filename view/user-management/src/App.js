import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Users from "./components/users/Users.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Users path="/" />
      </Router>
    </div>
  );
}

export default App;
