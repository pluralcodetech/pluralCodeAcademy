import communityDropdown from "../../constants/left-Side-Menu-Dropdowns/communityDropdown"

const communityDdState = {
    cySwitch : false
}

const communityDropdownReducer = (state = communityDdState, action) => {
    switch (action.type) {
        case communityDropdown.cySWITCH :
            return {
                ...state,
                cySwitch : action.payload
            }
        default :
            return state
    }
}

export default communityDropdownReducer;