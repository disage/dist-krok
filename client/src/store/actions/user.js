import {
  SET_MESSAGE,
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
} from './types';

import UserService from '../../services/user.service';

export const createUser = (item) => (dispatch) => {
  return UserService.createUser(item).then(
    (response) => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Пользователь удачно создан',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: CREATE_USER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const editUser = (item) => (dispatch) => {
  return UserService.editUser(item).then(
    (response) => {
      dispatch({
        type: EDIT_USER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Изменения пользователя удачно сохранились',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: EDIT_USER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const deleteUser = (item) => (dispatch) => {
  return UserService.deleteUser(item).then(
    (data) => {
      dispatch({
        type: DELETE_USER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Пользователь был успешно удален',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_USER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const getUser = (id) => (dispatch) => {
  return UserService.getUser(id).then(
    (response) => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: response,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_USER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const getUsers = () => (dispatch) => {
  return UserService.getUsers().then(
    (response) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: response,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_USERS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};
