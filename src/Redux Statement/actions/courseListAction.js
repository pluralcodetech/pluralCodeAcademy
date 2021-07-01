import axios from "axios";

const { default: COURSE_LIST } = require("../constants/courseList")

const courseListAction = () => async dispatch => {
    dispatch({
        type: COURSE_LIST.GET_LIST_DATA
    });

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/courses.php');
        const {data} = response

        // console.log(typeof data)

        dispatch({
            type: COURSE_LIST.GET_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_LIST.GET_LIST_ERROR,
            error
        })
    }
};

export default courseListAction;