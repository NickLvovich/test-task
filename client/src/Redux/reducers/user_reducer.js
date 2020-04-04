import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  SHOW_LIST_OF_USERS,
  FIND_USER
} from "../actions/types";

const initialState = {
  userData: [],
  pending: false,
  users: [],
  error: null,
  user: [],
  register: [],
  loginSucces: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case SHOW_LIST_OF_USERS:
      return { ...state, users: action.payload };
    case FIND_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state };
    default:
      return state;
  }
}
