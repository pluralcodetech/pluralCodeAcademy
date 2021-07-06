const { default: axios } = require("axios")
const { default: UP_DATE_EVENT } = require("../constants/upDateEvent")

const upDateEventAction = (parseUpDateData) => async dispatch => {
    dispatch ({
        type: UP_DATE_EVENT.UPDATE_EVENT_DATA
    })

    try {
        const response = await axios({
            method: "post",
            url: "https://pluralcode.academy/academyAPI/api/updateevent.php",
            data: parseUpDateData,
            headers: { "Content-Type": "multipart/form-data" }
        });

        const { data } = response;

        dispatch({
            type: UP_DATE_EVENT.UPDATE_EVENT_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: UP_DATE_EVENT.UPDATE_EVENT_ERROR,
            error
        });
    }
};

export default upDateEventAction