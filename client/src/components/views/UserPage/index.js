import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Redux/actions/user_actions";
import * as _ from "lodash";

const UserPage = () => {
  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );
  let userListObj = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  const userList = _.values(userListObj);

  useEffect(() => {
    dispatch(fetchUsers())
      .then(response => response.data)
      .catch(err => {
        setFormErrorMessage("There is no data, or problems with receiving it");
        setTimeout(() => {
          setFormErrorMessage("");
        }, 1000);
      });
  }, []);

  return (
    <div>
      <div className="app">
        <br />
        <div>
          {userList.map(user => (
            <div key={user._id}>
              <h3>{user.name}</h3>
              <img src={user.image}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserPage);
