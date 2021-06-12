import dashBoardDropDown from "../../constants/left-Side-Menu-Dropdowns/dashBoardDropDown"

const dashBoardDropDownAction = (payload) => ({
    type: dashBoardDropDown.dbSWITCH,
    payload : payload
});

export default dashBoardDropDownAction 