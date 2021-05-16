import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import course from './course';

export default combineReducers({
    auth,
    course,
    message,
});
