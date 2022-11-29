import { combineReducers } from "redux";
import { countReducer } from "./countReducer";




export const rootReducers = combineReducers({
    countReducer: countReducer
})