import ADD_EVENT from "../constants/addEvent";

const addEventState = {
    addEvent : [],
    loading : false,
    error: null,
}

const addEventReducer = (state = addEventState, action) => {
    switch(action.type) {
        case ADD_EVENT.ADD_EVENT_DATA:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_EVENT.ADD_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                addEvent: action.payload
            }
        case ADD_EVENT.ADD_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                addEvent: []
            }
        default:
            return state
    }
};

export default addEventReducer;