import DELETE_EVENT from "../constants/deleteEvent";

const deleteEventState = {
    deleteEvent : [],
    loading : false,
    error : null
}

const deleteEventReducer = (state = deleteEventState, action) => {
    switch (action.type) {
        case DELETE_EVENT.DELETE_EVENT_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_EVENT.DELETE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteEvent: action.payload
            };
        case DELETE_EVENT.DELETE_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                deleteEvent: [],
            }
        default: 
            return state
    }
}

export default deleteEventReducer