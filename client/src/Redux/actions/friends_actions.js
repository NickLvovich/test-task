import axios from "axios";
import {
  SHOW_FRIEND_LIST,
  ADD_FRIEND_REQUEST,
  FIND_FRIEND,
  REMOVE_FRIEND
} from "./types";
import { FRIEND_SERVER } from "../../components/Config";

export function addFriend(dataToSubmit) {
  const request = axios
    .post(`${FRIEND_SERVER}/add_friend`, dataToSubmit)
    .then(response => response.data);

  return {
    type: ADD_FRIEND_REQUEST,
    payload: request
  };
}

export function fetchFriendsList() {
  const request = axios
    .get(`${FRIEND_SERVER}/friends_list`)
    .then(response => response.data);
  console.log("request", request);

  return {
    type: SHOW_FRIEND_LIST,
    payload: request
  };
}

export function findFriend(dataToSubmit) {
  const request = axios
    .get(`${FRIEND_SERVER}/find_user`, dataToSubmit)
    .then(response => response.data);
  return {
    type: FIND_FRIEND,
    payload: request
  };
}

export function removeFriend(dataToSubmit) {
  const request = axios
    .post(`${FRIEND_SERVER}/remove_any_friend_or_request`, dataToSubmit)
    .then(response => response.data);

  return {
    type: REMOVE_FRIEND,
    payload: request
  };
}
