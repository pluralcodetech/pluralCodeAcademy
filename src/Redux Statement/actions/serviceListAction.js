import axios from "axios";
import SERVICE_LIST from "../constants/serviceList";


const serviceListAction = () => async dispatch => {
    dispatch(
        {
            type : SERVICE_LIST.SERVICE_LIST_DATA,
        }
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websiteservices.php')
        const {data} = response;
        
        dispatch({
            type: SERVICE_LIST.SERVICE_LIST_DATA_SUCCESS,
            data
        });
    } catch (error) {
        dispatch({
            type: SERVICE_LIST.SERVICE_LIST_DATA_ERROR,
            error
        })
    }
}

export default serviceListAction;