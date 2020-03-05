import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../hoc/auth'

import LandingPage from "./views/LandingPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer"

function App() {
  return (
    <Suspense fallback={<div> Please wait.. </div>}>
      <NavBar/>
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}
export default App;
