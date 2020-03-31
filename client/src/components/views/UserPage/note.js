<div className="user-container">
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
      </div> 