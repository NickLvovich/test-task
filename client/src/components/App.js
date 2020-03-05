import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../hoc/auth'

import HomePage from './views/HomePage'
import UserPage from "./views/UserPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer"
import FriendsPage from './views/FriendsPage'

function App() {
  return (
    <Suspense fallback={<div> Please wait.. </div>}>
      <NavBar/>
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/friends" component={Auth(FriendsPage, true)} />
          <Route exact path="/users" component={Auth(UserPage, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}
export default App;
