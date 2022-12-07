import { createStore } from "redux"
import {INCREMENT, DECREMENT, RESET, ADD_PERSION, COUNT_USER} from "./action_type/type.js"



//initial state...
const initialState = {
    count: 0,
    user:[
        {id: 1, name: 'habibor', address: 'dhaka'}
    ],
    totalUser: 1,
} 



//it's my reducer function 
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }

        case RESET:
            return {
                ...state,
                count: 0,
            }
        
        case ADD_PERSION:
            return {
                ...state,
                person: [...state.user, action.payload],
            }

        case COUNT_USER:
            return {
                ...state,
                totalUser: state.user.length,
            }

        default:
            return state;
    }
}


//it's my application store...
const store = createStore(counterReducer)

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

