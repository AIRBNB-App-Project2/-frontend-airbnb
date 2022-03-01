const initialState = []

const getRoomsReducers = (state = initialState, action) => {
    if (action.type === "SET_ROOMS") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getRoomsReducers