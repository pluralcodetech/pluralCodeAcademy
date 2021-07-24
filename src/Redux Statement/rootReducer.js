import { combineReducers } from "redux";
import addEventReducer from "./reducers/addEventReducer";
import calendarDataReducer from "./reducers/calendarDataReducer";
import courseDetailsReducer from "./reducers/courseDetailsReducer";
import courseListReducer from "./reducers/courseListReducer";
import customCreateReducer from "./reducers/CRUD/customCreateReducer";
import customDeleteReducer from "./reducers/CRUD/customDeleteReducer";
import customPostReducer from "./reducers/CRUD/customPostReducer";
import customReadReducer from "./reducers/CRUD/customReadReducer";
import { customStatusReducer } from "./reducers/CRUD/customStatusReducer";
import customUpdateReducer from "./reducers/CRUD/customUpdateReducer";
import customStatusUpdateReducer from "./reducers/customStatusUpdateReducer";
import deleteEventReducer from "./reducers/deleteEventReducer";
import discountListReducer from "./reducers/discountListReducer";
import eventListReducer from "./reducers/eventListReducer";
import sidebarShowReducer from "./reducers/sidebarShowReducer";
import upDateEventReducer from "./reducers/upDateEventReducer";
import userManagementReducer from "./reducers/UserManagementReducer";
import webSeriesListReducer from "./reducers/webSeriesListReducer";
import loginReducer from "./reducers/loginReducer";
import loginStatusReducer from "./reducers/loginStatusReducer";


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
   
    customStatusUpdateData : customStatusUpdateReducer,
    customCreateData : customCreateReducer,
    customUpdateData : customUpdateReducer,
    customDeleteData : customDeleteReducer,
    customPostData : customPostReducer,
    customReadData : customReadReducer,
    customStatusData : customStatusReducer,

    userManagementData : userManagementReducer,
    webSeriesListData : webSeriesListReducer,
    loginData : loginReducer,
    loginStatusData : loginStatusReducer,
});

export default rootReducer;