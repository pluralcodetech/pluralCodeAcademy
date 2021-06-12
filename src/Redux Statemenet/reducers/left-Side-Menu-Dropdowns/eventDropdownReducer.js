import eventDropdown from "../../constants/left-Side-Menu-Dropdowns/eventDropdown";


const etDropdownState = {
    etSwitch : false
}
const eventDropdownReducer = (state = etDropdownState, action) => {
    switch (action.type) {
        case eventDropdown.etSWITCH:
            return {
                ...state,
                etSwitch : action.payload
            }
        default:
            return state;
    }
};

export default eventDropdownReducer 