import { combineReducers } from "redux";
import listRooms from './getRoomsReducers'
import listUser from './getUserReducers'

const rootReducer = combineReducers({
    listRooms, listUser
})

export default rootReducer;