const { default: MENTOR } = require("../constants/mentor");

const mentorState = {
    mentor: [],
    isLoading: false,
    error: null
};

const mentorReducer = (state = mentorState, action) => {
    switch (action.type) {
        case MENTOR.MENTOR_DATA:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case MENTOR.MENTOR_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mentor: action.data
            };
        case MENTOR.MENTOR_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                mentor: []

            };
        default:
            return state;
    }
};

export default mentorReducer;