import React from "react";
import AddFriend from "../AddFriend/AddFriend";

const statusLine = props => {
  let {
    statusRequest,
    currentUser,
    firstUserID,
    secondUserID,
    currentUserFromList,
    currentFriendObject
  } = props;
  // console.log("currentUserFromList", currentUserFromList);

  console.log("statusRequest", statusRequest);

  switch (currentUser) {
    case firstUserID:
      return (
        <div>
          { currentUserFromList === secondUserID ? (
            "accept or delete"
          ) : (
            null
          )}
        </div>
      );

    case secondUserID:
      return (
        <div>
          {currentUserFromList === firstUserID ? (
            "pending request"
          ) : (
            null
          )}
        </div>
      );

    default:
      return null;
  }
};

export default statusLine;
