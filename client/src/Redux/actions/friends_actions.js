import axios from "axios";
import {
  SHOW_FRIEND_LIST,
  ADD_FRIEND_REQUEST,
  FIND_FRIEND_REQUEST,
  FIND_FRIEND_RESPONSE,
  REMOVE_FRIEND,
  ACCEPT_FRIEND
} from "./types";
import { FRIEND_SERVER } from "../../components/Config";

export async function addFriend(dataToSubmit) {
  const request = await axios
    .post(`${FRIEND_SERVER}/add_friend`, dataToSubmit)
    .then(response => response.data);

  return {
    type: ADD_FRIEND_REQUEST,
    payload: request
  };
}

export async function acceptFriend(dataToSubmit) {
  const request = await axios
  .post(`${FRIEND_SERVER}/request_approved`, dataToSubmit)
  .then(response => response.data);

return {
  type: ACCEPT_FRIEND,
  payload: request
};
}

export async function fetchFriendsList() {
  const request = await axios
    .get(`${FRIEND_SERVER}/list`)
    .then(response => response.data);

  return {
    type: SHOW_FRIEND_LIST,
    payload: request
  };
}

export async function findFriendByRequest(dataToSubmit) {
  const request = await axios
    .get(`${FRIEND_SERVER}/find_friend_by_request`, dataToSubmit)
    .then(response => response.data);
  return {
    type: FIND_FRIEND_REQUEST,
    payload: request
  };
}

export async function findFriendByResponse(dataToSubmit) {
  const request = await axios
    .get(`${FRIEND_SERVER}/find_friend_by_response`, dataToSubmit)
    .then(response => response.data);
  return {
    type: FIND_FRIEND_RESPONSE,
    payload: request
  };
}


export async function removeFriend(dataToSubmit) {
  const request = await axios
    .post(`${FRIEND_SERVER}/remove_any_friend_or_request`, dataToSubmit)
    .then(response => response.data);

  return {
    type: REMOVE_FRIEND,
    payload: request
  };
}
