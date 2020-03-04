import React, { useState } from "react";
import { Link } from "react-router-dom";

import Users from "../users";
import Friends from "../friends";

const Index = () => {
  const [main, setmain] = useState('');

  return (
    <>
      <div className="nav-menu container">
        <Link to="/"> logout </Link> 
        <div
        onClick={() => setmain('users')}
        className="users">
            users
        </div>
        <div
        onClick={() => setmain('friends')}
        className="friends">
            friends
        </div>
      </div>
      <div className="container center">
        {main === "users" ? <Users /> : <Friends />}
      </div>
    </>
  );
};

export default Index;
