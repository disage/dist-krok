import {
  CREATE_MATERIAL_FAIL,
  CREATE_MATERIAL_SUCCESS,
  DELETE_MATERIAL_FAIL,
  DELETE_MATERIAL_SUCCESS,
  EDIT_MATERIAL_FAIL,
  GET_MATERIAL_SUCCESS,
  EDIT_MATERIAL_SUCCESS,
  GET_MATERIAL_FAIL,
  GET_MATERIALS_FAIL,
  GET_MATERIALS_SUCCESS,
} from '../actions/types';

const initialState = { materials: [], material: {} };

const materials = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MATERIAL_SUCCESS:
      return {
        ...state,
      };
    case CREATE_MATERIAL_FAIL:
      return {
        ...state,
        material: null,
      };
    case DELETE_MATERIAL_FAIL:
      return {
        ...state,
        material: null,
      };
    case DELETE_MATERIAL_SUCCESS:
      return {
        ...state,
        material: null,
      };
    case EDIT_MATERIAL_FAIL:
      return {
        ...state,
        material: null,
      };
    case GET_MATERIAL_SUCCESS:
      return {
        ...state,
        material: payload,
      };
    case EDIT_MATERIAL_SUCCESS:
      return {
        ...state,
        material: payload,
      };
    case GET_MATERIAL_FAIL:
      return {
        ...state,
        material: null,
      };
    case GET_MATERIALS_FAIL:
      return {
        ...state,
        materials: null,
      };
    case GET_MATERIALS_SUCCESS:
      return {
        ...state,
        materials: payload,
      };
    default:
      return state;
  }
};
export default materials;
