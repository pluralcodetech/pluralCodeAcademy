import { combineReducers } from "redux";
import addEventReducer from "./reducers/addEventReducer";
import calendarDataReducer from "./reducers/calendarDataReducer";
import courseDetailsReducer from "./reducers/courseDetailsReducer";
import courseListReducer from "./reducers/courseListReducer";
import customStatusUpdateReducer from "./reducers/customStatusUpdateReducer";
import deleteEventReducer from "./reducers/deleteEventReducer";
import discountListReducer from "./reducers/discountListReducer";
import eventListReducer from "./reducers/eventListReducer";
import sidebarShowReducer from "./reducers/sidebarShowReducer";
import upDateEventReducer from "./reducers/upDateEventReducer";


const rootReducer = combineReducers({
    nav : sidebarShowReducer,
    courseListData : courseListReducer,
    calendarData : calendarDataReducer,
    courseDetailsData : courseDetailsReducer,
    discountListData : discountListReducer,
    eventListData : eventListReducer,
    addEventData : addEventReducer,
    deleteEventData : deleteEventReducer,
    upDateEventData : upDateEventReducer,
   
    customStatusUpdateData : customStatusUpdateReducer
});

export default rootReducer;