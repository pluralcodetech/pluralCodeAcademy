import { combineReducers } from "redux";
import leftSideMenuReducer from "../reducers/leftSideMenuReducer";

const rootReducer = combineReducers({
    leftMenuToggle : leftSideMenuReducer
})

export default rootReducer