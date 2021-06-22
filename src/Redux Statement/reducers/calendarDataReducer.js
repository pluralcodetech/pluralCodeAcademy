const { CALENDAR_DATA } = require("../constants/calendarData");

const calendarDataState = {
    data: ''
}

const calendarDataReducer = (state = calendarDataState, action) => {
    switch (action.type) {
        case CALENDAR_DATA:
            return {
                ...state,
                data : action.payload
            }
        default:
            return state;
    }
};

export default calendarDataReducer;