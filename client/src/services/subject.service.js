import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/subject/';

class SubjectService {
  async createSubject({ courseId, subjectName }) {
    return await axios
      .post(
        API_URL,
        {
          courseId,
          subjectName,
        },
        {
          headers: authHeader(),
        },
      )
      .then((response) => {
        return response.data;
      });
  }

  async editSubject({ id, courseId, subjectName }) {
    return await axios
      .put(
        API_URL + id,
        { id, courseId, subjectName },
        {
          headers: authHeader(),
        },
      )
      .then((response) => {
        return response.data;
      });
  }

  async deleteSubject({ id }) {
    return await axios
      .delete(API_URL + id, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async getSubjects() {
    return await axios
      .get(API_URL, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  async getSubject(id) {
    return await axios
      .get(API_URL + id, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new SubjectService();
