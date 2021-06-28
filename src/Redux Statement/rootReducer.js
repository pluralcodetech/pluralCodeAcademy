import { combineReducers } from "redux";
import calendarDataReducer from "./reducers/calendarDataReducer";
import courseDetailsReducer from "./reducers/courseDetailsReducer";
import courseListReducer from "./reducers/courseListReducer";
import discountListReducer from "./reducers/discountListReducer";
import sidebarShowReducer from "./reducers/sidebarShowReducer";

const rootReducer = combineReducers({
    nav : sidebarShowReducer,
    courseListData : courseListReducer,
    calendarData : calendarDataReducer,
    courseDetailsData : courseDetailsReducer,
    discountListData : discountListReducer
});

export default rootReducer;