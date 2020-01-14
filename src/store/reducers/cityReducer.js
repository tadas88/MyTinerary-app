const initState = {
    cities: [
    ]
}

const myReducer = (state = initState, action) => {
    console.log("Estoy en el reducer"); 
    console.log(action); 
    if (action.type = 'GET_LIST_OF_CITIES') {
        return {
            ...state,
            cities: action.payload
        }
    }else{
        return {
            state
        }
    }
}

export default myReducer