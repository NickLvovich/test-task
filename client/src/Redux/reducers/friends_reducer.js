import {
  SHOW_FRIEND_LIST,
  ADD_FRIEND_REQUEST,
  FIND_FRIEND,
  REMOVE_FRIEND
} from "../actions/types";

const initialState = {
  friend_status: [],
  friendsList: {},
  FriendRequest: []
};

export default function(state = initialState, action) {
  console.log("ftiendState", state);
  switch (action.type) {
    case ADD_FRIEND_REQUEST:
      return { ...state, FriendRequest: action.payload };
    case SHOW_FRIEND_LIST:
      return { ...state, friends: action.payload };
    case ADD_FRIEND_REQUEST:
      return { ...state, friend_status: action.payload };
    case REMOVE_FRIEND:
      return { ...state };
    default:
      return state;
  }
}
