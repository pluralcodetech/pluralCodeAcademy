const { default: UP_DATE_EVENT } = require("../constants/upDateEvent");

const upDateEventState = {
    upDateEvent : [],
    loading: false,
    error: null
};

const upDateEventReducer = (state=upDateEventState, action) => {
    switch (action.type) {
        case UP_DATE_EVENT.UPDATE_EVENT_DATA:
            return {
                ...state,
                loading: true, 
                error: null
            };
        case UP_DATE_EVENT.UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                loading : false,
                upDateEvent: action.payload
            };
        case UP_DATE_EVENT.UPDATE_EVENT_ERROR:
            return {
                ...state,
                loading : false,
                error: action.error,
                upDateEvent: [],
            }
        default:
            return state
    }
};

export default upDateEventReducer;