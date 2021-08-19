const { default: UI_UX_LIST } = require("../constants/uiUxList");

const uiUxListState = {
    uiUxList : [],
    isLoading : false,
    error : null
};


const uiUxListReducer = (state = uiUxListState, action) => {
    switch (action.type) {
        case UI_UX_LIST.UI_UX_LIST_DATA:
            return {
                ...state,
                isLoading : true,
                error : null
            };
        case UI_UX_LIST.UI_UX_LIST_SUCCESS:
            return {
                ...state,
                isLoading : false,
                uiUxList : action.data
            };
        case UI_UX_LIST.UI_UX_LIST_ERROR:
            return {
                ...state,
                isLoading : false,
                error : action.error,
                uiUxList : []
            };
        default:
            return state;
    }
}

export default uiUxListReducer;