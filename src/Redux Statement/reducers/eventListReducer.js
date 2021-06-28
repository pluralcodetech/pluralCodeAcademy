import EVENT_LIST from "../constants/eventList";


const eventListState = {
    eventList : [],
    loading : false,
    error : null
};


const eventListReducer = (state = eventListState, action) => {
    switch (action.type) {
        case EVENT_LIST.EVENT_LIST_DATA: 
            return {
                ...state,
                loading: true,
                error: null,
            }
        case EVENT_LIST.EVENT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                eventList : action.payload
            }
        case EVENT_LIST.EVENT_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error : action.error,
                eventList: [],
            }
        default:
            return state 
    }
};

export default eventListReducer
