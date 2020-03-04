import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../registerLogin/index";

import Main from "../mainScreen";

function Home() {
  const [isAuth, setisAuth] = useState(true);

  return (
    <>
      {isAuth ? <Main /> : <Login />}
    </>
  );
}

function mapStateToprops(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToprops)(withRouter(Home));
