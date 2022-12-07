const { createStore } = require("redux");

//constant type...
const INCREMENT = 'INCREMENT';
const DECREMENT = "DECREMENT";
const RESET = 'RESET'
const ADD_PERSION = 'ADD_PERSION';

//initial state...
const initialState = {
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

const reset = () => {
    return {
        type: RESET,
    }
}

const addPerson = (user) => {
    return {
        type: ADD_PERSION,
        payload: {user},
    }
}

//it's my reduser function 
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            }

            case RESET:
                return{
                    ...state,
                    count: 0,
                }

        default:
            return state;
    }
}


//it's my application store...
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//dispatch action...

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

