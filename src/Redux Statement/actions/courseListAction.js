import axios from "axios";

const { default: COURSE_LIST } = require("../constants/courseList")

const courseListAction = () => async dispatch => {
    dispatch({
        type: COURSE_LIST.GET_LIST_DATA
    });

    try {
        
        const response = await axios.get('http://codesandbox.com.ng/academyAPI/api/courses.php');
        // const response = await axios.get('https://randomuser.me/api/');
        const {data} = response

        // console.log(data)

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