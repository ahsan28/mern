import axios from 'axios';
import authHeader from "./auth-header";

const url = 'http://localhost:5000/task/'

const read = (id) => axios.get(url+"read/"+id, {headers: authHeader()})
const readAll = () => axios.get(url+"readAll", {headers: authHeader()})
const add = (task) => axios.post(url+"add", task, {headers: authHeader()})
const update = (task) => axios.put(url+"update", task, {headers: authHeader()})
const remove = (id) => axios.delete(url+"remove/"+id, {headers: authHeader()})

const functions = {
    read,
    readAll,
    add,
    update,
    remove,
}

export default functions;