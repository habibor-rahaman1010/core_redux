const { createStore } = require("redux");



//initial state...
const initialState = {
    count: 0,
    user:[
        {id: 1, name: 'habibor', address: 'dhaka'}
    ],
    totalUser: 1,
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
store.dispatch(addUser({id: 2, name: 'Aayan', address: 'mohammodpur'}));
store.dispatch(addUser({id: 3, name: 'Tamim', address: 'Dhanmondi'}));
store.dispatch(countUser());