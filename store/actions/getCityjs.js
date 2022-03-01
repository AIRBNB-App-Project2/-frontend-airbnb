import axios from 'axios'

export const fetchCity = () => {
    return (dispatch) => {
        axios.get('http://18.140.1.124:8081/city')
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setCity(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setCity = (payload) => {
    return {
        type: "SET_CITY", payload
    }
}