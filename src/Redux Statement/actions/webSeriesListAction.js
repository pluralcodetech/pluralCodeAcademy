import axios from "axios";

const { default: WEB_SERIES_LIST } = require("../constants/webSeriesList")

const webSeriesListAction = () => async dispatch => {
    dispatch({
        type: WEB_SERIES_LIST.WEB_SERIES_LIST_DATA
    });

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/webseries.php');
        const {data} = response;

        dispatch({
            type: WEB_SERIES_LIST.WEB_SERIES_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: WEB_SERIES_LIST.WEB_SERIES_ERROR,
            error
        });
    }
};

export default webSeriesListAction;