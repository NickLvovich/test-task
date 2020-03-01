import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div>
        <div>
          
        </div>
        <div>
          <Link to={"/register"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    );
  }
}

export default Home;
