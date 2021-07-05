import axios from "axios";

const { default: CUSTOM_READ } = require("src/Redux Statement/constants/CRUD/customRead")

const customReadAction = (customUrl) => async dispatch => {
    dispatch({
        type: CUSTOM_READ.CUSTOM_READ_DATA
    });

    try {
        const response = await axios.get(customUrl);
        const {data} = response

        dispatch({
            type: CUSTOM_READ.CUSTOM_READ_SUCCESS,
            payload : data
        });
    } catch (error) {
        dispatch({ 
            type: CUSTOM_READ.CUSTOM_READ_ERROR,
            error
        });
    }
};

export default customReadAction;