import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService {
    async login(email, password) {
        return await axios
            .post(API_URL + "signIn", { email, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(firstName, lastName, phone, email, password) {
        return axios.post(API_URL + "signUp", {
            firstName,
            lastName,
            phone,
            email,
            password,
        });
    }
}

export default new AuthService();
