import { combineReducers } from "redux";
import communityDropdownReducer from "../reducers/left-Side-Menu-Dropdowns/communityDropdownReducer";
import dashBoardDropDownReducer from "../reducers/left-Side-Menu-Dropdowns/dashBoardDropDownReducer";
import discountDropdownReducer from "../reducers/left-Side-Menu-Dropdowns/discountDropdownReducer";
import eventDropdownReducer from "../reducers/left-Side-Menu-Dropdowns/eventDropdownReducer";
import userManagementDropdownReducer from "../reducers/left-Side-Menu-Dropdowns/userManagementDropdownReducer";
import leftSideMenuReducer from "../reducers/leftSideMenuReducer";

const rootReducer = combineReducers({
    leftMenuToggle : leftSideMenuReducer,
    dashBoardDropDown : dashBoardDropDownReducer,
    eventDropdown : eventDropdownReducer,
    discountDropdown : discountDropdownReducer,
    userManagementDropdown : userManagementDropdownReducer,
    communityDropdown : communityDropdownReducer
})

export default rootReducer