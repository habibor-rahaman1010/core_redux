//constant type...
const INCREMENT = 'INCREMENT';
const DECREMENT = "DECREMENT";
const ADD_PERSION = 'ADD_PERSION';

//initial state...
const counterState = {
    count: 0,
    person:[
        {id: 1, name: 'habibor', address: 'dhaka'}
    ]
} 

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

const addPerson = (user) => {
    return {
        type: ADD_PERSION,
        payload: {user},
    }
}
console.log("Hello");
