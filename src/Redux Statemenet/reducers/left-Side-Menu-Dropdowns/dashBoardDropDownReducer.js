import dashBoardDropDown from "../../constants/left-Side-Menu-Dropdowns/dashBoardDropDown"

const dashBDState = {
    dbSwitch : false
}


const dashBoardDropDownReducer = (state = dashBDState, action) => {
    switch (action.type) {
        case dashBoardDropDown.dbSWITCH :
            return {
                ...state,
                dbSwitch : action.payload
            }
        default:
            return state
    }
}

export default dashBoardDropDownReducer