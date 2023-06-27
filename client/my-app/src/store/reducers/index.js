import { combineReducers } from "redux";
import productsReducer from "./productReducer";

const indexReducer = combineReducers({productsReducer})

export default indexReducer