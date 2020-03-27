import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Input, Form } from "antd";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, findUser } from "../../../Redux/actions/user_actions";
import {
  fetchFriendsList,
  findFriendByResponse,
  findFriendByRequest
} from "../../../Redux/actions/friends_actions";
import * as _ from "lodash";

import "./users.scss";

import AddFriend from "../AddFriend/AddFriend";
import StatusLine from "../StatusLine/statusLine";

const UserPage = props => {
  const currentUser = props.user.userData._id;

  console.log("currentUser", currentUser);

  let friendsList = useSelector(state => state.friends.friends);
  let allUsersObj = useSelector(state => state.user.users);
  let inputUserObj = useSelector(state => state.user.user);
  let receivingUserID = useSelector(state => state.user.receivingUserID);
  let actingUserID = useSelector(state => state.user.actingUserID);

  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );

  const dispatch = useDispatch();

  const allUsers = _.values(allUsersObj);
  const inputUser = _.values(inputUserObj);

  console.log("friendsList", friendsList);

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

      {/* <div className="user-container">
        {inputUser <= 1
          ? allUsers.map(user =>
              currentUser === user._id ? null : (
                <div key={user._id} className="users">
                  <div className="user-information">
                    <img src={user.image} />
                    <div className="close-information">
                      <h3>{user.name}</h3>
                    </div>
                  </div>
                  <div className="friends-information">
                    <div className="information-item">
                      {friendsList.length > 0 ? (
                        friendsList.map(friend => (
                          <div key={friend._id} className="information">
                            {console.log('===> ', friend._id, user._id, friend.firstUserID, friend.secondUserID, friend.firstUserID)}
                            <>
                              <StatusLine
                                currentUser={currentUser}
                                statusRequest={friend.status}
                                firstUserID={friend.firstUserID}
                                secondUserID={friend.secondUserID}
                                currentUserFromList={user._id}
                                currentFriendObject={friend._id}
                              />
                            </>
           
                          </div>
                        ))
                      ) : (
                        <AddFriend
                          secondUserID={user._id}
                          currentUser={currentUser}
                          currentUserFromList={user._id}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            )
          : inputUser[0].map(user => (
              <div key={user._id} className="users">
                <div className="user-information">
                  <img src={user.image} />
                  <h3>{user.name}</h3>
                </div>
                <div className="friends-information">
                  {friendsList.map(friend => (
                    <div key={friend._id} className="information">
                      {user._id === friend.secondUserID ? (
                        <div className="status">{friend.status}</div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div> */}
      <div className="user-container">
        {inputUser <= 1
          ? allUsers.map(user => (
              <>
                {currentUser !== user._id && (
                  <div key={user._id} className="users">
                    <div className="user-information">
                      <img src={user.image} />
                      <div className="close-information">
                        <h3>{user.name}</h3>
                      </div>
                    </div>

                    <div className="friends-information">
                      <AddFriend
                        secondUserID={user._id}
                        currentUser={currentUser}
                      />
                    </div>
                  </div>
                )}
              </>
            ))
          : inputUser[0].map(user => (
              <div key={user._id} className="users">
                <div className="user-information">
                  <img src={user.image} />
                  <h3>{user.name}</h3>
                </div>
                <div className="friends-information">
                  <div className="friends-information">
                    <AddFriend
                      secondUserID={user._id}
                      currentUser={currentUser}
                    />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default withRouter(UserPage);
