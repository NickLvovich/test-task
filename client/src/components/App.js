import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './home'
import Users from './users'
import Friends from './friends'
import Login from './registerLogin/index'
import Register from './registerLogin/register'

function App() {
  return (
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/users" component={Users}/>
        <Route path="/friends"component={Friends}/>
      </Switch>
  );
}

export default App;
