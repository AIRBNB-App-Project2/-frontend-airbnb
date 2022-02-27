import axios from 'axios'

export const fetchRoomsUid = () => {
    return (dispatch) => {
        // const getToken = localStorage.getItem('token')
        axios.get(`http://18.140.1.124:8081/room/${room_uid}`)
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setPost(data.data));
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setUid = (payload) => {
    return {
        type: "SET_ROOMS_UID", payload
    }
}