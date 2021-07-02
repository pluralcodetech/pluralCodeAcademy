const { default: CUSTOM_UPDATE } = require("src/Redux Statement/constants/CRUD/customUpdate");

const customUpdateState = {
    customUpdate : [],
    loading : false,
    error : null
};

const customUpdateReducer = (state = customUpdateState, action) => {
    switch (action.type) {
        case CUSTOM_UPDATE.CUSTOM_UPDATE_DATA:
            return {
                ...state,
                loading : true,
                error : null
            };
        case CUSTOM_UPDATE.CUSTOM_UPDATE_SUCCESS:
            return {
                ...state,
                loading : false,
                customUpdate : action.payload
            };
        case CUSTOM_UPDATE.CUSTOM_UPDATE_ERROR:
            return {
                ...state,
                loading : false,
                error : action.error,
                customUpdate : []
            };
        default:
            return state
    }
};

export default customUpdateReducer;