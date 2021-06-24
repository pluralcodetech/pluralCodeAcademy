const { default: COURSE_DETAILS } = require("../constants/courseDetails");

const courseDetailsState = {
    courseDetails : [],
    loading: false,
    error: null
};

const courseDetailsReducer = (state = (courseDetailsState), action) => {
    switch(action.type) {
        case COURSE_DETAILS.POST_DETAILS_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };
        case COURSE_DETAILS.GET_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                courseDetails: action.payload
            };
        case COURSE_DETAILS.GET_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                courseDetails: []
            };
        default: 
            return state

    }
}

export default courseDetailsReducer;