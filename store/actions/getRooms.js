import axios from 'axios'

export const fetchAllRooms = () => {
    return (dispatch) => {
        // const getToken = localStorage.getItem('token')
        axios.get('http://18.140.1.124:8081/room?length=100')
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setPost(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setPost = (payload) => {
    return {
        type: "SET_ROOMS", payload
    }
}