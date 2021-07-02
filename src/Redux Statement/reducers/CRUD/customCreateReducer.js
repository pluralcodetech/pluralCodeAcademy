const { default: CUSTOM_CREATE } = require("src/Redux Statement/constants/CRUD/customCreate");

const customCreateState = {
    customCreate : [],
    loading : false,
    error : null
};

const customCreateReducer = (state=customCreateState, action) => {
    switch (action.type) {
        case CUSTOM_CREATE.CUSTOM_CREATE_DATA:
            return {
                ...state,
                loading: true, 
                error : null
            };
        case CUSTOM_CREATE.CUSTOM_CREATE_SUCCESS:
            return {
                ...state,
                loading : false,
                customCreate : action.payload
            };
        case CUSTOM_CREATE.CUSTOM_CREATE_ERROR:
            return {
                ...state,
                loading : false,
                error : action.error,
                customCreate : []
            };
        default:
            return state;
    }
};

export default customCreateReducer;