const { default: WEBDEV_LIST } = require("../constants/WebDevList");

const WebDevListState = {
    WebDevList: [],
    isLoading: false,
    error: null,
};

const WebDevListReducer = (state = WebDevListState, action) => {
    switch (action.type) {
        case WEBDEV_LIST.WEBDEV_LIST_DATA:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case WEBDEV_LIST.WEBDEV_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                WebDevList: action.data,
            }
        case WEBDEV_LIST.WEBDEV_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                WebDevList: [],
            }
        default:
            return state;
    };
};

export default WebDevListReducer;