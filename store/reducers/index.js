import { combineReducers } from "redux";
import listRooms from './getRoomsReducers'

const rootReducer = combineReducers({
    listRooms
})

export default rootReducer;