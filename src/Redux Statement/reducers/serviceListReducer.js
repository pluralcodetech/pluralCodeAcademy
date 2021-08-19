const { default: SERVICE_LIST } = require("../constants/serviceList");

const serviceListState = {
    serviceList: [],
    isLoading: false,
    error: null
};

const serviceListReducer = (state = serviceListState, action) => {
    switch (action.type) {
        case SERVICE_LIST.SERVICE_LIST_DATA:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case SERVICE_LIST.SERVICE_LIST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                serviceList: action.data
            };
        case SERVICE_LIST.SERVICE_LIST_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                serviceList: []
            };
        default:
            return state;
    }
};

export default serviceListReducer;