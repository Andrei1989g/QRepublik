import {combineReducers, createStore} from "redux";
import authorization from "../store/authorization";

export const rootReducer = combineReducers({
    authorization
})

const store = createStore(rootReducer)
export default store