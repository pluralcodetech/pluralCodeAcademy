import discountDropdown from "../../constants/left-Side-Menu-Dropdowns/discountDropdown";

const discountDropdownAction = (payload) => ({
    type: discountDropdown.dtSWITCH,
    payload: payload
});

export default discountDropdownAction