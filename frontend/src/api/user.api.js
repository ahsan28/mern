import axios from 'axios';
import authHeader from "./auth-header";

const API = axios.create({ baseURL: 'http://localhost:5000/user'})


const getUsers = () => API.get('/read')
const addUser = (user) => API.post("/add", user)
const comboLogin = (user) => API.post("/combo-login", user, {headers: authHeader()})
    .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
    });
const logout = () => {
    localStorage.clear();
};
// const addUser = (user) => API.post("/add", user)
// const addUser = (user) => API.post("/add", user)

const functions = {
    getUsers,
    addUser,
    comboLogin,
    logout,
}

export default functions;