const initialState = []

const getCityReducers = (state = initialState, action) => {
    if (action.type === "SET_CITY") {
        return action.payload
    }

    return state
}

export default getCityReducers