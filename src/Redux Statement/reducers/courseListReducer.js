const { default: COURSE_LIST } = require("../constants/courseList");

const courseListState = {
    courseList : [],
    loading: false,
    error: null
};

const courseListReducer =(state = courseListState, action) => {
    switch (action.type) {
        case COURSE_LIST.GET_LIST_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };
        case COURSE_LIST.GET_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                courseList: action.payload
            };
        case COURSE_LIST.GET_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error:action.error,
                courseList: []
            }
        default: 
            return state;
    }
}

export default courseListReducer;