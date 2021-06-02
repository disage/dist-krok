import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from '../actions/types';

const initialState = { users: [], user: {} };

const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        users: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
export default users;
