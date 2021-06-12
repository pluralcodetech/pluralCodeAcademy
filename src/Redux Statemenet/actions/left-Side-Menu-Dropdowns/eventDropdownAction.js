import eventDropdown from "../../constants/left-Side-Menu-Dropdowns/eventDropdown";

const eventDropdownAction = (payload) => ({
    type: eventDropdown.etSWITCH,
    payload: payload
});

export default eventDropdownAction