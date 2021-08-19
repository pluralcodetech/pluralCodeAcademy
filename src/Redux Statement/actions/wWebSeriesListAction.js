import axios from "axios";

const { default: W_WEB_SERIES_LIST } = require("../constants/wWebSeriesList");

const wWebSeriesListAction = () => async dispatch => {
    dispatch({
        type: W_WEB_SERIES_LIST.W_WEB_SERIES_LIST_DATA
    });

    try {

        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websitewebseries.php')
        const {data} = response;
        dispatch({
            type: W_WEB_SERIES_LIST.W_WEB_SERIES_LIST_DATA_SUCCESS,
            data
        });
        
    } catch (error) {
        dispatch({
            type: W_WEB_SERIES_LIST.W_WEB_SERIES_LIST_DATA_ERROR,
            error
        })
    }
}

export default wWebSeriesListAction