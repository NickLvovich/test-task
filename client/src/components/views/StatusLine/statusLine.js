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
  console.log("statusRequest", statusRequest);
  switch (statusRequest) {
    case "Request":
      return (
        <div className="request">
          {currentUserFromList === firstUserID ? (
            currentUser === secondUserID ? (
              currentUser !== firstUserID ? (
                <div className="status-show">Accept or delete</div>
              ) : (
                <AddFriend
                  secondUserID={secondUserID}
                  currentUser={currentUser}
                />
              )
            ) : null
          ) : currentUserFromList === secondUserID ? (
            currentUser === firstUserID ? (
              currentUser !== secondUserID ? (
                <div className="status-show">Pending Request</div>
              ) : (
                <AddFriend
                  secondUserID={secondUserID}
                  currentUser={currentUser}
                />
              )
            ) : null
          ) : (
            null
          )}
        </div>
      );
      break;
    case "Friends":
      return (
        <div className="request">
          <div className="status-show">Friend</div>
        </div>
      );
      break;
    default:
      return null;
  }
};

export default statusLine;
