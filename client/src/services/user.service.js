import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/material/';

class UserService{
    async createUser(subjectId, materialName, materialContent) {
        return await axios.post(API_URL + 'create', {
            subjectId,
            materialName,
            materialContent,
        }, {
            headers: authHeader(),
        }).then((response) => {
            return response.data;
        });
    }

    async editUser(id, subjectId, materialName, materialContent) {
        return await axios
            .put(API_URL + id, {subjectId, materialName, materialContent}, {
                headers: authHeader,
            }).then((response) => {
                return response.data;
            });
    }

    async deleteUser(id) {
        return await axios
            .delete(API_URL + id,{
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }

    async getUsers() {
        return await axios
            .get(API_URL + 'all', {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }

    async userRoleUpdate(id, role) {
        return await axios
            .post(API_URL + 'updateRole/' + id,{role}, {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }

    async getUser(id) {
        return await axios
            .get(API_URL + id, {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }

    async findUserByEmail(email) {
        return await axios
            .post(API_URL, {email}, {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }
}

export default new UserService();
