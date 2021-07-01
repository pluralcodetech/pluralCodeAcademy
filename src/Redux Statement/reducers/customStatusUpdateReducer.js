const { default: CUSTOM_STATUS_UPDATE } = require("../constants/customStatusUpdate");

const customStatusUpdateState = {
    customStatusUpdate : [],
    loading : false,
    error : null
};

const customStatusUpdateReducer = (state = customStatusUpdateState, action) => {
    switch (action.type) {
        case CUSTOM_STATUS_UPDATE.CUSTOM_STATUS_UPDATE_DATA:
            return {
                ...state,
                loading : true, 
                error : null
            };
        case CUSTOM_STATUS_UPDATE.CUSTOM_STATUS_UPDATE_SUCCESS:
            return {
                ...state,
                loading : false,
                updatePendingStatus : action.payload
            };
        case CUSTOM_STATUS_UPDATE.CUSTOM_STATUS_UPDATE_ERROR:
            return {
                ...state,
                loading : false,
                error : action.error,
                updatePendingStatus : []
            };
        default : 
            return state;
    }
}

export default customStatusUpdateReducer