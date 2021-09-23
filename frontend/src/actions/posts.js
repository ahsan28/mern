import AppService from '../api/app.api'
import UserService from '../api/user.api'
import DashboardService from '../api/dashboard.api'

const getDashboards = () => async (dispatch) => {
    try {
        const {data} = await AppService.home()
        dispatch({ type: 'FETCH_ALL', payload:data})
    } catch (error) {
        
    }
}

const functions = {
    getDashboards,
}

export default functions;