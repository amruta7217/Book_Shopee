const initialState = {
    cart:null
}

const cartData = (state = initialState,action) => {
    switch(action.type) {
        case "CART" : return {
            ...state,
            cart:action.payload
        }
        default : return state;
    }
}

export default cartData