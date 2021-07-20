import axios from "axios";
import EVENT_LIST from "../constants/eventList";

const eventListAction = () => async dispatch => {
    dispatch({
        type: EVENT_LIST.EVENT_LIST_DATA
    });

    try {
        const response = await axios('https://pluralcode.academy/academyAPI/api/adminevents.php')
        const {data} = response

        dispatch({
            type: EVENT_LIST.EVENT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EVENT_LIST.EVENT_LIST_ERROR,
            error
        })
    }
}

export default eventListAction