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
    availableProduct: 0,
    bestSeller: 0,
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

const totoalProduct = () => {
    return {
        type: TOTAL_PRODUCT,
    }
}

const availableProduct  = () => {
    return {
        type: AVAILABLE_PRODUCT,
    }
}

const bestSeller = () => {
    return {
        type: AVAILABLE_PRODUCT,
    }
}

// it's my reducer funtion...

const reducer = function productReducer(state = initialSatate, action){
    switch (action.type) {
        case value:
            
            break;
    
    default:
        break;
    }
}