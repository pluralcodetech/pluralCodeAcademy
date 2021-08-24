import axios from "axios";

const { default: COURSE_NAME_LIST } = require("../constants/courseName");

const courseNameAction = () => async dispatch => {
    dispatch(
       { type: COURSE_NAME_LIST.COURSE_NAME_LIST_DATA}
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/allcoursesname.php');
        const {data} = response

        dispatch(
            {
                type: COURSE_NAME_LIST.COURSE_NAME_LIST_DATA_SUCCESS,
                data
            }
        );
    } catch (error) {
        dispatch(
            {
                type: COURSE_NAME_LIST.COURSE_NAME_LIST_DATA_ERROR,
                error
            }
        );
    }
}

export default courseNameAction;