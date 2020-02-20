import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home'
import Users from './users'
import Friends from './friends'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/friends"component={Friends}/>
      </Switch>
    </div>
  );
}

export default App;
