import {
  SET_MESSAGE,
  CREATE_MATERIAL_SUCCESS,
  CREATE_MATERIAL_FAIL,
  EDIT_MATERIAL_SUCCESS,
  EDIT_MATERIAL_FAIL,
  DELETE_MATERIAL_SUCCESS,
  DELETE_MATERIAL_FAIL,
  GET_MATERIAL_SUCCESS,
  GET_MATERIAL_FAIL,
  GET_MATERIALS_SUCCESS,
  GET_MATERIALS_FAIL,
} from './types';

import MaterialService from '../../services/material.service';

export const createMaterial = (item) => (dispatch) => {
  return MaterialService.createMaterial(item).then(
    (response) => {
      dispatch({
        type: CREATE_MATERIAL_SUCCESS,
        payload: response,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Материал удачно создался',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: CREATE_MATERIAL_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const editMaterial = (item) => (dispatch) => {
  return MaterialService.editMaterial(item).then(
    (response) => {
      dispatch({
        type: EDIT_MATERIAL_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Изменения матереала удачно сохранились',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: EDIT_MATERIAL_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const deleteMaterial = (item) => (dispatch) => {
  return MaterialService.deleteMaterial(item).then(
    (data) => {
      dispatch({
        type: DELETE_MATERIAL_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Материал был успешно удален',
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_MATERIAL_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const getMaterial = (id) => (dispatch) => {
  return MaterialService.getMaterial(id).then(
    (response) => {
      dispatch({
        type: GET_MATERIAL_SUCCESS,
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
        type: GET_MATERIAL_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const getMaterials = () => (dispatch) => {
  return MaterialService.getMaterials().then(
    (response) => {
      dispatch({
        type: GET_MATERIALS_SUCCESS,
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
        type: GET_MATERIALS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};
