import discountDropdown from "../../constants/left-Side-Menu-Dropdowns/discountDropdown"

const dtDropdownState = {
    dtSwitch : false
}

const discountDropdownReducer = (state = dtDropdownState, action) => {
    switch (action.type) {
        case discountDropdown.dtSWITCH : 
            return {
                ...state,
                dtSwitch : action.payload
            }
        default: 
            return state;
    }
}

export default discountDropdownReducer