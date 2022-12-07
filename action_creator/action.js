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