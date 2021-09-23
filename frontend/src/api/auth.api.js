import axios from 'axios';

const url = 'http://localhost:5000/'

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
const home = (data) => axios.post(url+"home", data)

const logout = () => {
  localStorage.clear()
}

const functions = {
    getCurrentUser,
    home,
    logout
}

export default functions;