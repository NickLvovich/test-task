import React from "react";
import DeleteFriend from "../EventButtons/DeleteFriend";
import AcceptFriend from "../EventButtons/AcceptFriend";

const statusLine = props => {
  let {
    statusRequest,
    currentUser,
    firstUserID,
    secondUserID,
    currentUserFromList,
    currentFriendObject
  } = props;

  switch (currentUserFromList) {
    case firstUserID:
      return (
        <div>
          {statusRequest !== "Friends" ? (
            currentUser === secondUserID ? (
              <div className="info">
                <AcceptFriend friendshipID={currentFriendObject} /> or{" "}
                <DeleteFriend friendshipID={currentFriendObject} />
              </div>
            ) : null
          ) : (
            <div className="info">
              <p>friends</p> 
              <DeleteFriend friendshipID={currentFriendObject} />
            </div>
          )}
        </div>
      );

    case secondUserID:
      return (
        <div>
          {statusRequest !== "Friends" ? (
            currentUser === firstUserID ? (
              <div className="info">
                <p>pending request or</p> 
                <DeleteFriend friendshipID={currentFriendObject} />
              </div>
            ) : null
          ) : (
            <div className="info">
              <p>friends</p>
              <DeleteFriend friendshipID={currentFriendObject} />
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default statusLine;
