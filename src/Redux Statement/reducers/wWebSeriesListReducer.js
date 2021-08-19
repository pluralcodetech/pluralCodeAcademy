const { default: W_WEB_SERIES_LIST } = require("../constants/wWebSeriesList");

const wWebSeriesListState = {
    wWebSeriesList: [],
    isLoading: false,
    error: null
};

const wWebSeriesListReducer = (state = wWebSeriesListState, action) => {
    switch (action.type) {
        case W_WEB_SERIES_LIST.W_WEB_SERIES_LIST_DATA:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case W_WEB_SERIES_LIST.W_WEB_SERIES_LIST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wWebSeriesList: action.data
            };

        case W_WEB_SERIES_LIST.W_WEB_SERIES_LIST_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                wWebSeriesList: []
            };

        default:
            return state;
    };
};

export default wWebSeriesListReducer;