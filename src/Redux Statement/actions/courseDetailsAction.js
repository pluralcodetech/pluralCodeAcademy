import axios from 'axios';
import COURSE_DETAILS from '../constants/courseDetails'

const courseDetailsAction = (parseId) => async dispatch => {
    dispatch ({
        type: COURSE_DETAILS.POST_DETAILS_DATA
    });

    try {
        const response = await axios({
            method: "post",
            url: 'https://pluralcode.academy/academyAPI/api/admincoursedetails.php',
            data: parseId,
            headers: { "Content-Type": "multipart/form-data" },
        });

        const {data} = response

        dispatch({
            type: COURSE_DETAILS.GET_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: COURSE_DETAILS.GET_DETAILS_ERROR,
            error
        })
    }
};

export default courseDetailsAction
