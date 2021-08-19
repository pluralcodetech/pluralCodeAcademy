

import axios from "axios";
import MENTOR from "../constants/mentor";


const mentorAction = () => async dispatch => {
    dispatch(
        {
            type : MENTOR.MENTOR_DATA,
        }
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websitementor.php')
        const {data} = response;
        
        dispatch({
            type: MENTOR.MENTOR_DATA_SUCCESS,
            data
        });
    } catch (error) {
        dispatch({
            type: MENTOR.MENTOR_DATA_ERROR,
            error
        })
    }
}

export default mentorAction;