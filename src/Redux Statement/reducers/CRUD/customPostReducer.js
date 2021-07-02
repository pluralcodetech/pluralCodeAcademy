const { default: CUSTOM_POST } = require("src/Redux Statement/constants/CRUD/customPost");

const customPostState = {
    customPost : [],
    loading : false,
    error : null
};

const customPostReducer = (state = customPostState, action) => {
    switch (action.type) {
        case CUSTOM_POST.CUSTOM_POST_DATA: 
            return {
                ...state,
                loading: true,
                error : null
            };

        case CUSTOM_POST.CUSTOM_POST_SUCCESS:
            return {
                ...state,
                loading : false,
                customPost : action.payload
            };

        case CUSTOM_POST.CUSTOM_POST_ERROR:
            return {
                ...state,
                loading : false,
                error : action.error,
                customPost : []
            }
        default:
            return state
    }
};

export default customPostReducer