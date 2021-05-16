import {
    CREATE_COURSE_FAIL,
    CREATE_COURSE_SUCCESS,
    DELETE_COURSE_FAIL,
    DELETE_COURSE_SUCCESS,
    EDIT_COURSE_FAIL,
    GET_COURSE_SUCCESS,
    EDIT_COURSE_SUCCESS,
    GET_COURSE_FAIL,
    GET_COURSES_FAIL,
    GET_COURSES_SUCCESS,
} from "../actions/types";

const initialState = {courses: [], course: {}}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
    case CREATE_COURSE_SUCCESS:
        return {
            ...state,
        };
    case CREATE_COURSE_FAIL:
        return {
            ...state,
            course: null
        };
    case DELETE_COURSE_FAIL:
        return {
            ...state,
            course: null
        };
    case DELETE_COURSE_SUCCESS:
        return {
            ...state,
            course: null
        };
    case EDIT_COURSE_FAIL:
        return {
            ...state,
            course: null
        };
    case GET_COURSE_SUCCESS:
        return {
            ...state,
            course: payload.course
        };
    case EDIT_COURSE_SUCCESS:
        return {
            ...state,
            course: payload.course
        };
    case GET_COURSE_FAIL:
        return {
            ...state,
            course: null
        };
    case GET_COURSES_FAIL:
        return {
            ...state,
            courses: null
        };
    case GET_COURSES_SUCCESS:
        return {
            ...state,
            courses: payload.courses
        };
    default:
        return state;
    }
}
