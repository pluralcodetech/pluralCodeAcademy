const { default: WEB_SERIES_LIST } = require("../constants/webSeriesList");

const webSeriesListState = {
    webSeriesList: [],
    loading: false,
    error: null
};

const webSeriesListReducer = (state = webSeriesListState, action) => {
    switch (action.type){
        case WEB_SERIES_LIST.WEB_SERIES_LIST_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };
        case WEB_SERIES_LIST.WEB_SERIES_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                webSeriesList: action.payload,
            };
        case WEB_SERIES_LIST.WEB_SERIES_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                webSeriesList: []
            };
        default:
            return state;
    };
}

export default webSeriesListReducer