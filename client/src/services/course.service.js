import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:3000/api/courses/";

class CourseService{
    async createCourse(name, teacherId, groupsId){
        return await axios
            .post(API_URL + "create", { name, teacherId, groupsId }, {
                headers: authHeader
            })
    }

    async editCourse(id, name, teacherId, groupsId){
        return await axios
            .put(API_URL + id, { name, teacherId, groupsId }, {
                headers: authHeader
            })
    }

    async deleteCourse(id){
        return await axios
            .put(API_URL + id, {}, {
                headers: authHeader
            })
    }

    async getCourses(){
        return await axios
            .get(API_URL, {
                headers: authHeader
            })
    }

    async getCourse(id){
        return await axios
            .get(API_URL + id, {
                headers: authHeader
            })
    }
}

export default new CourseService();
