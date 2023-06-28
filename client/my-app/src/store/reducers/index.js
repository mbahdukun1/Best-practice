import { combineReducers } from "redux";
import productsReducer from "./productReducer";
import categoriesReducer from "./categoryReducer";

const indexReducer = combineReducers({productsReducer, categoriesReducer})

export default indexReducer