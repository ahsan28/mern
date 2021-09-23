import axios from 'axios';

const url = 'http://localhost:5000/'

const home = () => axios.get(url)
const login = (data) => axios.post(url+"login", data)

const functions = {
    home,
    login
}

export default functions;