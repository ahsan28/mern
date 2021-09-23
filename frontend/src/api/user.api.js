import axios from 'axios';

const url = 'http://localhost:5000/user/'

const getUsers = () => axios.get(url)
const addUser = (user) => axios.post(url+"add", user)

const functions = {
    getUsers,
    addUser
}

export default functions;