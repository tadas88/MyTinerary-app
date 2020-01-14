import axios from "axios";

export const getCityList = () => dispatch => {
    axios
        .get('https://mern-ubiqum-v2.herokuapp.com/cities/all')
        .then(res => {
            console.log(res.data); 
            
            dispatch({
                type: 'GET_LIST_OF_CITIES',
                payload: res.data
            })
        })
}

/* follow presentation, netninja explanation to be able to connect the redux files */