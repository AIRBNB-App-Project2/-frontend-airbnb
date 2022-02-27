import { combineReducers } from "redux";

import listRooms from './getRoomsReducers'
import listUser from './getUserReducers'
import listCity from './getCityReducers'

const rootReducer = combineReducers({
    listRooms, listUser, listCity
})

export default rootReducer;