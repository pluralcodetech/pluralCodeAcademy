import axios from "axios";

const { default: WEB_DIGITAL_LIST } = require("../constants/webDigitalList");

const webDigitalListAction = () => async dispatch => {
    dispatch(
       { type: WEB_DIGITAL_LIST.WEB_DIGITAL_LIST_DATA,}
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websitedigital.php')
        const {data} = response;

        dispatch({
            type: WEB_DIGITAL_LIST.WEB_DIGITAL_LIST_DATA_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type: WEB_DIGITAL_LIST.WEB_DIGITAL_LIST_DATA_ERROR,
            error
        })
    }
};

export default webDigitalListAction