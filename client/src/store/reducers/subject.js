import {
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
} from '../actions/types';

const initialState = { subjects: [], subject: {} };

const subjects = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
      };
    case CREATE_SUBJECT_FAIL:
      return {
        ...state,
        subject: null,
      };
    case DELETE_SUBJECT_FAIL:
      return {
        ...state,
        subject: null,
      };
    case DELETE_SUBJECT_SUCCESS:
      return {
        ...state,
        subject: null,
      };
    case EDIT_SUBJECT_FAIL:
      return {
        ...state,
        subject: null,
      };
    case GET_SUBJECT_SUCCESS:
      return {
        ...state,
        subjects: payload,
      };
    case EDIT_SUBJECT_SUCCESS:
      return {
        ...state,
        subject: payload,
      };
    case GET_SUBJECT_FAIL:
      return {
        ...state,
        subjects: null,
      };
    case GET_SUBJECTS_FAIL:
      return {
        ...state,
        subjects: null,
      };
    case GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjects: payload,
      };
    default:
      return state;
  }
};
export default subjects;
