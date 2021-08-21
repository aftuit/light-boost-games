import { combineReducers } from "redux";
import { buyReducer } from "./buyReducer";
import { loginReducer } from "./loginReducer";
import { contactReducer } from "./contactReducer";
export const rootReducer = combineReducers({
    login: loginReducer,
    buy: buyReducer,
    contact: contactReducer
})