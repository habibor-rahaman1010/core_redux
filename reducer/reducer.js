

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