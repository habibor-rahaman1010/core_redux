import {INCREMENT, DECREMENT, RESET, ADD_PERSION, COUNT_USER} from "./action_type/type.js"

//this is my all actions...
const increment = () => {
    return{
        type:INCREMENT,
    }
}

const decrement = () => {
    return {
        type: DECREMENT,
    }
}

const reset = () => {
    return {
        type: RESET,
    }
}

const addUser = (user) => {
    return {
        type: ADD_PERSION,
        payload: user,
    }
}

const countUser = () =>{
    return {
        type: COUNT_USER,
    }
}

export {increment, decrement, reset, addUser, countUser};