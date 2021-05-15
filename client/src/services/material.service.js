import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/material/';

class MaterialService {
    async createMaterial(subjectId, materialName, materialContent) {
        return await axios.post(API_URL, {
            subjectId,
            materialName,
            materialContent,
        }, {
            headers: authHeader(),
        }).then((response) => {
            return response.data;
        });
    }

    async editMaterial(id, subjectId, materialName, materialContent) {
        return await axios
            .put(API_URL + id, {subjectId, materialName, materialContent}, {
                headers: authHeader,
            }).then((response) => {
                return response.data;
            });
    }

    async deleteCourse(id) {
        return await axios
            .put(API_URL + id, {}, {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }

    async getMaterials() {
        return await axios
            .get(API_URL, {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }

    async getMaterial(id) {
        return await axios
            .get(API_URL + id, {
                headers: authHeader(),
            }).then((response) => {
                return response.data;
            });
    }
}

export default new MaterialService();
