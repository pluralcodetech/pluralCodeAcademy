import userManagementDropdown from "../../constants/left-Side-Menu-Dropdowns/userManagementDropdown";

const userManagementDropdownAction = (payload) => ({
    type: userManagementDropdown.umSWITCH,
    payload: payload
});

export default userManagementDropdownAction;