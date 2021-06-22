const { CALENDAR_DATA } = require("../constants/calendarData");

const calendarDataAction = (payload) => ({
    type: CALENDAR_DATA,
    payload: payload
});

export default calendarDataAction;

