import { combineReducers } from "redux";
import courseListReducer from "./reducers/courseListReducer";
import sidebarShowReducer from "./reducers/sidebarShowReducer";

const rootReducer = combineReducers({
    nav : sidebarShowReducer,
    courseListData : courseListReducer
});

export default rootReducer;