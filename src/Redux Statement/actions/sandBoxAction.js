import axios from "axios";
import SAND_BOX from "../constants/sandBox";


const sandBoxAction = () => async dispatch => {
    dispatch(
        {
            type : SAND_BOX.SAND_BOX_DATA,
        }
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websitesandbox.php')
        const {data} = response;
        
        dispatch({
            type: SAND_BOX.SAND_BOX_DATA_SUCCESS,
            data
        });
    } catch (error) {
        dispatch({
            type: SAND_BOX.SAND_BOX_DATA_ERROR,
            error
        })
    }
}

export default sandBoxAction;