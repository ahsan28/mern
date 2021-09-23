import axios from 'axios';

const url = 'http://localhost:5000/dashboard/'

const getDashboards = () => axios.get(url)
const addDashboard = (dashboard) => axios.post(url+"add", dashboard)

const functions = {
    getDashboards,
    addDashboard
}

export default functions;