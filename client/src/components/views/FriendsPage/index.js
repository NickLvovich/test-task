import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Redux/actions/user_actions";
import { fetchFriendsList } from "../../../Redux/actions/friends_actions";
import * as _ from "lodash";

import StatusLine from "../StatusLine/statusLine";
import AddFriend from "../EventButtons/AddFriend";

const FriendsPage = () => {
  let friendsListObj = useSelector((state) => state.friends.friends);
  let allUsersObj = useSelector((state) => state.user.users);
  let currentUser = useSelector((state) => state.user.userData._id);

  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );

  const dispatch = useDispatch();

  const allUsers = _.values(allUsersObj);

  const friendsList = _.values(friendsListObj);

  const currentUserList = friendsList.filter(
    (friend) =>
      friend.firstUserID === currentUser || friend.secondUserID === currentUser
  );

  const outgoingList = currentUserList.filter(
    (friend) =>
      friend.firstUserID === currentUser && friend.status !== "Friends"
  );
  const incomingList = currentUserList.filter(
    (friend) =>
      friend.secondUserID === currentUser && friend.status !== "Friends"
  );
  const currentFriendsList = currentUserList.filter(
    (friend) => friend.status === "Friends"
  );

  useEffect(() => {
    dispatch(fetchUsers())
      .then((response) => response.data)
      .catch((err) => {
        setFormErrorMessage("There is no data, or problems with receiving it");
        setTimeout(() => {
          setFormErrorMessage("");
        }, 1000);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchFriendsList())
    .then((response) => response.data)
    .catch((err) => {
      setFormErrorMessage("There is no data, or problems with receiving it");
      setTimeout(() => {
        setFormErrorMessage("");
      }, 1000);
    });
  }, [])

  useEffect(() => {
    
  }, [friendsList])

  return (
    <div>
      <div className="container">
        <div className="requests-header">
          <h1>Pending requests</h1>
          <div className="user-container">
            {outgoingList.length >= 1 ? (
              <>
                <h2>Outgoing</h2>
                {allUsers.map((user) =>
                  currentUser !== user._id &&
                  outgoingList.find(
                    (friend) =>
                      friend.secondUserID === user._id &&
                      friend.status !== "Friends"
                  ) ? (
                    <div key={user._id} className="users">
                      <div className="user-information">
                        <img src={user.image} alt={user.name} />
                        <div className="close-information">
                          <h3>{user.name}</h3>
                        </div>
                      </div>

                      <div className="friends-information">
                        <div className="information-item">
                          {currentUserList.find(
                            (friend) =>
                              friend.secondUserID === user._id ||
                              friend.firstUserID === user._id
                          ) ? (
                            currentUserList.map(
                              (friend) => (
                                <StatusLine
                                  currentUser={currentUser}
                                  statusRequest={friend.status}
                                  firstUserID={friend.firstUserID}
                                  secondUserID={friend.secondUserID}
                                  currentUserFromList={user._id}
                                  currentFriendObject={friend._id}
                                />
                              )
                              // нужно отсортировать объект
                            )
                          ) : (
                            <AddFriend
                              secondUserID={user._id}
                              currentUser={currentUser}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </>
            ) : null}
            {incomingList.length >= 1 ? (
              <>
                <h2>Incoming</h2>
                {allUsers.map((user) =>
                  currentUser !== user._id &&
                  incomingList.find(
                    (friend) =>
                      friend.firstUserID === user._id &&
                      friend.status !== "Friends"
                  ) ? (
                    <div key={user._id} className="users">
                      <div className="user-information">
                        <img src={user.image} alt={user.name} />
                        <div className="close-information">
                          <h3>{user.name}</h3>
                        </div>
                      </div>

                      <div className="friends-information">
                        <div className="information-item">
                          {currentUserList.find(
                            (friend) =>
                              friend.secondUserID === user._id ||
                              friend.firstUserID === user._id
                          ) ? (
                            currentUserList.map(
                              (friend) => (
                                <StatusLine
                                  currentUser={currentUser}
                                  statusRequest={friend.status}
                                  firstUserID={friend.firstUserID}
                                  secondUserID={friend.secondUserID}
                                  currentUserFromList={user._id}
                                  currentFriendObject={friend._id}
                                />
                              )
                              // нужно отсортировать объект
                            )
                          ) : (
                            <AddFriend
                              secondUserID={user._id}
                              currentUser={currentUser}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </>
            ) : null}
            {currentFriendsList.length >= 1 ? (
              <>
                <h2>Friends</h2>
                {allUsers.map((user) =>
                  currentUser !== user._id &&
                  currentFriendsList.find(
                    (friend) =>
                      friend.secondUserID === user._id ||
                      (friend.firstUserID === user._id &&
                        friend.status === "Friends")
                  ) ? (
                    <div key={user._id} className="users">
                      <div className="user-information">
                        <img src={user.image} alt={user.name} />
                        <div className="close-information">
                          <h3>{user.name}</h3>
                        </div>
                      </div>

                      <div className="friends-information">
                        <div className="information-item">
                          {currentUserList.find(
                            (friend) =>
                              friend.secondUserID === user._id ||
                              friend.firstUserID === user._id
                          ) ? (
                            currentUserList.map(
                              (friend) => (
                                <StatusLine
                                  currentUser={currentUser}
                                  statusRequest={friend.status}
                                  firstUserID={friend.firstUserID}
                                  secondUserID={friend.secondUserID}
                                  currentUserFromList={user._id}
                                  currentFriendObject={friend._id}
                                />
                              )
                              // нужно отсортировать объект
                            )
                          ) : (
                            <AddFriend
                              secondUserID={user._id}
                              currentUser={currentUser}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FriendsPage);
