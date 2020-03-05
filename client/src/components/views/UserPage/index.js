import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Redux/actions/user_actions";

const UserPage = () => {
  let userList = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()).then(response => response.data);

  }, []);

  console.log("userList", userList);
  return (
    <div>
      <div className="app">
        <br />
        <div>{userList}</div>
      </div>
    </div>
  );
};

export default withRouter(UserPage);
