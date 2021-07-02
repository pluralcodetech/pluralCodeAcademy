const { default: CUSTOM_DELETE } = require("src/Redux Statement/constants/CRUD/customDelete");

const customDeleteState = {
    customDelete : [],
    loading : false,
    error : null
};

const customDeleteReducer = (state = customDeleteState, action) => {
    switch (action.type) {
        case CUSTOM_DELETE.CUSTOM_DELETE_DATA:
            return {
                ...state,
                loading: true, 
                error : null
            };
        case CUSTOM_DELETE.CUSTOM_DELETE_SUCCESS:
            return {
                ...state,
                loading : false,
                customDelete : action.payload
            };
        case CUSTOM_DELETE.CUSTOM_DELETE_ERROR:
            return {
                ...state,
                loading : false,
                error : action.error,
                customDelete : []
            };
        default: 
            return state
    }
};

export default customDeleteReducer