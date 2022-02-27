import { combineReducers } from "redux";
import listRooms from './getRoomsReducers';
import listRoomUid from './getRoomUidReducers';


const rootReducer = combineReducers({
    listRooms,
    listRoomUid,
})

export default rootReducer;