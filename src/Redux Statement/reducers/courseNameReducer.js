const { default: COURSE_NAME_LIST } = require("../constants/courseName");

const courseNameState = {
    courseName: [],
    isLoading: false,
    error : null
};

const courseNameReducer = (state = courseNameState, action) => {
    switch (action.type) {
        case COURSE_NAME_LIST.COURSE_NAME_LIST_DATA:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case COURSE_NAME_LIST.COURSE_NAME_LIST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                courseName: action.data,
            };
        case COURSE_NAME_LIST.COURSE_NAME_LIST_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                courseName: []
            };

        default:
            return state;
    };
};

export default courseNameReducer;