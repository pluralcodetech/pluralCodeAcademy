const { default: axios } = require("axios")
const { default: DELETE_EVENT } = require("../constants/deleteEvent")

const deleteEventAction = (parseID) => async dispatch => {
    dispatch({
        type: DELETE_EVENT.DELETE_EVENT_DATA,
    })

    try {
        const response = await axios({
            method: 'post',
            url: 'http://codesandbox.com.ng/academyAPI/api/deleteevent.php',
            data: parseID,
            headers: { "Content-Type": "multipart/form-data" }
        });

        const {data} = response
        
        dispatch({
            type: DELETE_EVENT.DELETE_EVENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_EVENT.DELETE_EVENT_ERROR,
            error
        })
    }
};

export default deleteEventAction