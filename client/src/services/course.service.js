import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/courses/';

class CourseService {
  async createCourse({ name, teacherId, groupsId }) {
    return await axios
      .post(
        API_URL + 'create',
        {
          name,
          teacherId,
          groupsId,
        },
        {
          headers: authHeader(),
        },
      )
      .then((response) => {
        return response.data;
      });
  }

  async editCourse({ id, name, teacherId, groupsId }) {
    return await axios
      .put(
        API_URL + id,
        { name, teacherId, groupsId },
        {
          headers: authHeader(),
        },
      )
      .then((response) => {
        return response.data;
      });
  }

  async deleteCourse({ id }) {
    return await axios
      .delete(API_URL + id, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async getCourses() {
    return await axios
      .get(API_URL, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async getCourse(id) {
    return await axios
      .get(API_URL + id, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new CourseService();
