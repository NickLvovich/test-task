import {
  SHOW_FRIEND_LIST,
  ADD_FRIEND_REQUEST,
  REMOVE_FRIEND,
  FIND_FRIEND_REQUEST,
  FIND_FRIEND_RESPONSE
} from "../actions/types";

const initialState = {
  friend_status: [],
  friendsList: [],
  FriendRequest: [],
  actingUserID: {},
  receivingUserID: {},
  friends: {}
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
    case FIND_FRIEND_REQUEST:
      return { ...state, actingUserID: action.payload };
    case FIND_FRIEND_RESPONSE:
      return { ...state, receivingUserID: action.payload };
    default:
      return state;
  }
}
