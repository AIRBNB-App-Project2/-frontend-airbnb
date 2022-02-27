const initialState = []

const getRoomsUidReducers = (state = initialState, action) => {
    if (action.type === "SET_ROOMS_UID") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getRoomsUidReducers;