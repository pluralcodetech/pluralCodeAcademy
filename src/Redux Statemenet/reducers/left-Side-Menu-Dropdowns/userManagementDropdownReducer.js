import userManagementDropdown from "../../constants/left-Side-Menu-Dropdowns/userManagementDropdown"

const userManagementDdState = {
    umSwitch : false
}

const userManagementDropdownReducer = (state = userManagementDdState, action) => {
    switch (action.type) {
        case userManagementDropdown.umSWITCH :
            return {
                ...state,
                umSwitch : action.payload
            }
        default:
            return state
    }
}

export default userManagementDropdownReducer