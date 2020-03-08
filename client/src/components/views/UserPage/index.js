import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Input, Form } from "antd";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, findUser } from "../../../Redux/actions/user_actions";
import { fetchFriendsList } from "../../../Redux/actions/friends_actions";
import * as _ from "lodash";

import "./users.scss";

const UserPage = props => {
  const currentUser = props.user.userData._id;

  let friendsListObj = useSelector(state => state.friends.friends);
  let userListObj = useSelector(state => state.user.users);
  let inputUserObj = useSelector(state => state.user.user);

  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );

  const dispatch = useDispatch();

  const userList = _.values(userListObj);
  const inputUser = _.values(inputUserObj);
  const friendsList = _.values(friendsListObj);

  console.log("friendsListObj", friendsListObj);

  useEffect(() => {
    dispatch(fetchUsers())
      .then(response => response.data)
      .catch(err => {
        setFormErrorMessage("There is no data, or problems with receiving it");
        setTimeout(() => {
          setFormErrorMessage("");
        }, 1000);
      });

    dispatch(fetchFriendsList())
      .then(response => response.data)
      .catch(err => {
        setFormErrorMessage("There is no data, or problems with receiving it");
        setTimeout(() => {
          setFormErrorMessage("");
        }, 1000);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <Formik
          initialValues={{ name: "name" }}
          onSubmit={(values, { setSubmitting }) => {
            let dataToSubmit = {
              name: values.name
            };
            dispatch(findUser(dataToSubmit))
              .then(response => response.payload.user)
              .catch(err => {
                setFormErrorMessage(
                  "There is no data, or problems with receiving it"
                );
                setTimeout(() => {
                  setFormErrorMessage("");
                }, 1000);
              });
            setSubmitting(false);
          }}
        >
          {props => (
            <Form className="button-block" onSubmit={props.handleSubmit}>
              <Input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="user-container">
        {inputUser <= 1
          ? userList.map(user => (
              <div key={user._id} className="users">
                <div className="user-information">
                  <img src={user.image} />
                  <div className="close-information">
                    <h3>{user.name}</h3>
                    <p>{currentUser === user._id ? "You" : null}</p>
                  </div>
                </div>
                <div className="friends-information">
                  {friendsList.map(friend => (
                    <div key={friend._id} className="information">
                      {user._id === friend.secondUserID ? <div className="status">{friend.status}</div> : null }
                      
                    </div>
                  ))}
                </div>
              </div>
            ))
          : inputUser[0].map(user => (
              <div key={user._id} className="users">
                <div className="user-information">
                  <img src={user.image} />
                  <h3>{user.name}</h3>
                </div>
                <div className="friends-information">
                {friendsList.map(friend => (
                    <div key={friend._id} className="information">
                      {user._id === friend.secondUserID ? <div className="status">{friend.status}</div> : null }
                      
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default withRouter(UserPage);