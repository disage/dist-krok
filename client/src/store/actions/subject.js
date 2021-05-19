import {
  SET_MESSAGE,
  CREATE_SUBJECT_SUCCESS,
  CREATE_SUBJECT_FAIL,
  EDIT_SUBJECT_SUCCESS,
  EDIT_SUBJECT_FAIL,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAIL,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAIL,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
} from './types';

import SubjectService from '../../services/subject.service';

export const createSubject = (item) => (dispatch) => {
  return SubjectService.createSubject(item).then(
    (response) => {
      dispatch({
        type: CREATE_SUBJECT_SUCCESS,
        payload: response,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Тема удачно создалась',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: CREATE_SUBJECT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const editSubject = (item) => (dispatch) => {
  return SubjectService.editSubject(item).then(
    (response) => {
      dispatch({
        type: EDIT_SUBJECT_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Изменения темы удачно сохранились',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: EDIT_SUBJECT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const deleteSubject = (item) => (dispatch) => {
  return SubjectService.deleteSubject(item).then(
    (data) => {
      dispatch({
        type: DELETE_SUBJECT_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Тема была успешно удалена',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_SUBJECT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const getSubject = (id) => (dispatch) => {
  return SubjectService.getSubject(id).then(
    (response) => {
      dispatch({
        type: GET_SUBJECT_SUCCESS,
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
        type: GET_SUBJECT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const getSubjects = () => (dispatch) => {
  return SubjectService.getSubjects().then(
    (response) => {
      dispatch({
        type: GET_SUBJECTS_SUCCESS,
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
        type: GET_SUBJECTS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};
