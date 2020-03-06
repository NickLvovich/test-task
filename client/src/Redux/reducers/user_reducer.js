import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  SHOW_LIST_OF_USERS
} from "../actions/types";


const initialState = {
  pending: false,
  users: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case SHOW_LIST_OF_USERS:
      return {...state, users: action.payload}
    default:
      return state;
  }
}

