import { fetchAllRooms, setPost } from "./getRooms";
import { fetchUser, setUser } from "./getUser";
import { fetchCity, setCity } from "./getCityjs";

const allStore = {
    fetchAllRooms,
    setPost, fetchUser, setUser, fetchCity, setCity
};

export default allStore;