import { legacy_createStore as createStore, applyMiddleware } from "redux";
import indexReducer from "./reducers/index";
import thunk from "redux-thunk"

let store = createStore(indexReducer,applyMiddleware(thunk))

export default store