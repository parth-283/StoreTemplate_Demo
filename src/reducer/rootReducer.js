import { combineReducers } from "redux";
import userReducer from "./userReducer";
import templateReducer from "./templateReducer";

export const rootReducer = combineReducers({
    user:userReducer,
    template:templateReducer
})