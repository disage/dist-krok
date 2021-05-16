import {
    SET_MESSAGE,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAIL,
    EDIT_COURSE_SUCCESS,
    EDIT_COURSE_FAIL,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAIL,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,
    GET_COURSES_SUCCESS,
    GET_COURSES_FAIL,
} from './types';

import CourseService from '../../services/course.service';

export const createCourse = (name, teacherId, groupsId) => (dispatch) => {
    return CourseService.createCourse(name, teacherId, groupsId).then(
        (response) => {
            dispatch({
                type: CREATE_COURSE_SUCCESS,
                payload: response
            });

            dispatch({
                type: SET_MESSAGE,
                payload: 'Курс удачно создался',
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: CREATE_COURSE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const editCourse = (id, name, teacherId, groupsId) => (dispatch) => {
    return CourseService.editCourse(id, name, teacherId, groupsId).then(
        (response) => {
            dispatch({
                type: EDIT_COURSE_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: 'Изменения курса удачно сохранились',
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: EDIT_COURSE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const deleteCourse = async (id) => (dispatch) => {
    return CourseService.deleteCourse(id).then(
        (data) => {
            dispatch({
                type: DELETE_COURSE_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: 'Курс был успешно удален',
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: DELETE_COURSE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const getCourse = (id) => (dispatch) => {
    return CourseService.getCourse(id).then(
        (response) => {
            dispatch({
                type: GET_COURSE_SUCCESS,
                payload: response
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_COURSE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const getCourses = () => (dispatch) => {
    return CourseService.getCourses().then(
        (response) => {
            dispatch({
                type: GET_COURSES_SUCCESS,
                payload: response
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_COURSES_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};
