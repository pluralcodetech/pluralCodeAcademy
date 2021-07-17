import axios from "axios";

const { default: USER_MANAGER } = require("../constants/UserManagement");

const userManagementAction = () => async dispatch => {
    dispatch({
        type: USER_MANAGER.USER_MANAGER_DATA
    });

    try {
        const response = await axios.get("https://pluralcode.academy/academyAPI/api/appusers.php");
        const {data} = response

        dispatch({
            type: USER_MANAGER.USER_MANAGER_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ 
            type: USER_MANAGER.USER_MANAGER_ERROR, 
            error
        });
    }
};

export default userManagementAction;
