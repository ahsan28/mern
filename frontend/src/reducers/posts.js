const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'FETCH_ALL':
        return { ...state, ...payload }
    
    case 'CREATE':
        return { ...state, ...payload }

    default:
        return state
    }
}
