const { createStore } = require("redux");

//constant variable my project...
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const TOTAL_PRODUCT = "TOTAL_PRODUCT";
const AVAILABLE_PRODUCT = "AVAILABLE_PRODUCT";
const BEST_SELLER = "BEST_SELLER";


// initial state of project...
const initialSatate = {
    product:[{
        id: 1,
        name: "Hp eleitbook Laptop",
        brand: "Hp",
        quantity: 1,
        price: 56000,
        reting: 4.5,
        status: true,
    }],
    totalProduct: 1,
    availableProduct: [],
    bestSeller: [],
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
        type: AVAILABLE_PRODUCT,
    }
}

// it's my reducer funtion...

const reducer = function productReducer(state = initialSatate, action){
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
                availableProduct: [...state.availableProduct, avilable],
            }

        case BEST_SELLER:
            const best = state.product.filter((p) => p.reting >= 3.5);
            return {
                ...state,
                bestSeller: [...state.bestSeller, best],
            }
    
        default:
            return state;
        }
}

// it's my redux application store...
const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProduct());