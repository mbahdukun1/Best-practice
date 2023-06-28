import {CATEGORIES} from "../actions/actionType"

const initialState = {
    categories:[],
}

export default function categoriesReducer(state = initialState, action) {
    switch(action.type) {
        case CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };

            default:
                return state
    }
}