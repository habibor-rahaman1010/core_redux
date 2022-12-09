// here multiple reducer function used...

const { createStore, combineReducers } = require("redux");

//constant variable my project...
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const TOTAL_PRODUCT = "TOTAL_PRODUCT";
const AVAILABLE_PRODUCT = "AVAILABLE_PRODUCT";
const BEST_SELLER = "BEST_SELLER";

//user constant type...
const INCREMENT = 'INCREMENT';
const DECREMENT = "DECREMENT";
const RESET = 'RESET'
const ADD_PERSION = 'ADD_USER';
const COUNT_USER = 'COUNT_USER'


// initial state of project...
const initialState1 = {
    product:[{
        id: 1,
        name: "Hp eleitbook Laptop",
        brand: "Hp",
        quantity: 1,
        price: 56000,
        reting: 4.2,
        status: false
    }],
    totalProduct: 1,
    availableProduct: [],
    bestSeller: [],
}

//user initial state...
const initialState2 = {
    count: 0,
    user:[
        {id: 1, name: 'habibor', address: 'dhaka'}
    ],
    totalUser: 1,
} 

//action creator...
const getProduct = () => {
    return {
        type: GET_PRODUCT,
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

const getTotoalProduct = () => {
    return {
        type: TOTAL_PRODUCT,
    }
}

const getAvailableProduct  = () => {
    return {
        type: AVAILABLE_PRODUCT,
    }
}

const getBestSeller = () => {
    return {
        type: BEST_SELLER,
    }
}

//user action creator...
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


// it's my reducer funtion...
const reducer1 = function productReducer(state = initialState1, action){
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state
            }

        case ADD_PRODUCT:
            return {
                ...state,
                product: [...state.product, action.payload]
            }
        case TOTAL_PRODUCT:
            return {
                ...state,
                totalProduct: state.product.length,
            }

        case AVAILABLE_PRODUCT:

            const avilable = state.product.filter((p) => p.status === true);
            return {
                ...state,
                availableProduct: [...state.availableProduct, ...[...avilable]],
            }

        case BEST_SELLER:
            const best = state.product.filter((p) => p.reting >= 3.5);
            return {
                ...state,
                bestSeller: [...state.bestSeller, ...[...best]],
            }
    
        default:
            return state;
        }
}


//it's my user reducer function 
const reducer2 = function counterReducer(state = initialState2, action) {
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
                user: [...state.user, action.payload],
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

// it's my root reducer in project...
const rootReducer = combineReducers({
    productR: reducer1,
    counterR: reducer2,
})


// it's my redux application store...
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// action dispatch 
store.dispatch(getProduct());

store.dispatch(addProduct({id: 2, name: "apple macbook pro", brand: "apple", quantity: 3, price: 180000, reting: 4.8, status: true}));

store.dispatch(addProduct({id: 2, name: "asus zenbook pro", brand: "asus", quantity: 2, price: 120000, reting: 3.8, status: false}));

store.dispatch(addProduct({id: 2, name: "lenevo spiral 2x", brand: "lenevo", quantity: 6, price: 85000, reting: 3.4, status: true}));

store.dispatch(addProduct({id: 2, name: "dell spiral 4x", brand: "dell", quantity: 2, price: 85000, reting: 4.1, status: true}));

store.dispatch(getTotoalProduct());

store.dispatch(getAvailableProduct());

store.dispatch(getBestSeller());


//
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(addUser({id: 2, name: 'Aayan', address: 'mohammodpur'}));
store.dispatch(addUser({id: 3, name: 'Tamim', address: 'Dhanmondi'}));
store.dispatch(countUser());
