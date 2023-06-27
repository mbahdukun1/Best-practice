import { PRODUCTS } from "../actions/actionType";

const initialState = {
    products: []
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case PRODUCTS:
            return{
                ...state,
                products: action.payload
            };
            default: 
            return false
    }
}