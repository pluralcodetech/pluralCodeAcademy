const { default: WEB_DIGITAL_LIST } = require("../constants/webDigitalList");

const webDigitalListState = {
    webDigitalList: [],
    isLoading: false,
    error: null,
};

const webDigitalListReducer = (state = webDigitalListState, action) => {
    switch (action.type) {
        case WEB_DIGITAL_LIST.WEB_DIGITAL_LIST_DATA:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case WEB_DIGITAL_LIST.WEB_DIGITAL_LIST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                webDigitalList: action.data
            };
        case WEB_DIGITAL_LIST.WEB_DIGITAL_LIST_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                webDigitalList: []
            };
        default:
            return state;
    }
};

export default webDigitalListReducer;