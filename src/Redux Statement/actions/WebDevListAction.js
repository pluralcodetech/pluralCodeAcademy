import axios from "axios";
import WEBDEV_LIST from "../constants/WebDevList";


const WebDevListAction = () => async dispatch => {
    dispatch(
        {
            type : WEBDEV_LIST.WEBDEV_LIST_DATA,
        }
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websitewebdesign.php')
        const {data} = response;
        
        dispatch({
            type: WEBDEV_LIST.WEBDEV_LIST_SUCCESS,
            data
        });
    } catch (error) {
        dispatch({
            type: WEBDEV_LIST.WEBDEV_LIST_ERROR,
            error
        })
    }
}

export default WebDevListAction;