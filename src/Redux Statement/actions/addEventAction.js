const { default: axios } = require("axios");
const { default: ADD_EVENT } = require("../constants/addEvent")

const addEventAction = (parseEventData) => async dispatch => {
    dispatch({
        type: ADD_EVENT.ADD_EVENT_DATA
    });

    try {
        const response = await axios({
            method: 'post',
            url: 'https://pluralcode.academy/academyAPI/api/create_events.php',
            data: parseEventData,
            headers: { "Content-Type": "multipart/form-data" }
        });

        const {data} = response;
        // console.log(data);
        
        dispatch({
            type: ADD_EVENT.ADD_EVENT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ 
            type: ADD_EVENT.ADD_EVENT_ERROR, 
            error
        })
    }
}

export default addEventAction;