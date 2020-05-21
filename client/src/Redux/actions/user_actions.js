import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  SHOW_LIST_OF_USERS,
  FIND_USER
} from "./types";
import { USER_SERVER } from "../../components/Config";

export async function registerUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export async function loginUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export async function auth() {
  const request = await axios
    .get(`${USER_SERVER}/auth`)
    .then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request
  };
}

export async function logoutUser() {
  const request = await axios
    .get(`${USER_SERVER}/logout`)
    .then(response => response.data);

  return {
    type: LOGOUT_USER,
    payload: request
  };
}

export async function fetchUsers() {
  const request = await axios
    .get(`${USER_SERVER}/usersList`)
    .then(response => response.data);
  return {
    type: SHOW_LIST_OF_USERS,
    payload: request
  };
}

export async function findUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/find_user`, dataToSubmit)
    .then(response => response.data);
  return {
    type: FIND_USER,
    payload: request
  };
}

