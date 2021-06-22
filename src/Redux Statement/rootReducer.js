import { combineReducers } from "redux";
import calendarDataReducer from "./reducers/calendarDataReducer";
import courseListReducer from "./reducers/courseListReducer";
import sidebarShowReducer from "./reducers/sidebarShowReducer";

const rootReducer = combineReducers({
    nav : sidebarShowReducer,
    courseListData : courseListReducer,
    calendarData : calendarDataReducer
});

export default rootReducer;