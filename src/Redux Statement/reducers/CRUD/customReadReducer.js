const { default: CUSTOM_READ } = require("src/Redux Statement/constants/CRUD/customRead");

const customReadState = {
    customRead : [],
    loading : false,
    error : null
};

const customReadReducer = (state = customReadState, action) => {
    switch (action.type) {
        case CUSTOM_READ.CUSTOM_READ_DATA:
            return {
                ...state,
                loading : true,
                error : null
            };
        case CUSTOM_READ.CUSTOM_READ_SUCCESS:
            return {
                ...state,
                loading : false,
                customRead : action.payload
            };
        case CUSTOM_READ.CUSTOM_READ_ERROR:
            return {
                ...state,
                laoding : false,
                error : action.error,
                customRead : []
            };
        default:
            return state;
    }
};

export default customReadReducer