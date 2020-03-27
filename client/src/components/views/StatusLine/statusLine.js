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

  console.log("statusRequest", statusRequest)

  switch (currentUserFromList) {
    

    case firstUserID:
      return (
        <div>
          {statusRequest === "Friends"
            ? "friends"
            : currentUser === secondUserID
            ? "accept or delete"
            : null}
        </div>
      );

    case secondUserID:
      return (
        <div>
          {statusRequest === "Friends"
            ? "friends"
            : currentUser === firstUserID
            ? "pending request"
            : null}
        </div>
      );

    default:
      return (
        <>
          {statusRequest === undefined ? (
            <AddFriend
              statusRequest={statusRequest}
              firstUserID={firstUserID}
              secondUserID={currentUserFromList}
              currentUser={currentUser}
            />
          ) : null}
        </>
      );
  }
};

export default statusLine;
