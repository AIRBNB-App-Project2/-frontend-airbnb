import axios from 'axios'

export const fetchUser = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('http://18.140.1.124:8081/user', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setUser(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setUser = (payload) => {
    return {
        type: "SET_USER", payload
    }
}