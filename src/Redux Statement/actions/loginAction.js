import axios from "axios";
import loginStatusAction from "./loginStatusAction";

const { default: LOGIN } = require("../constants/login");

const loginAction = (loginURL, loginData) => async dispatch => {
    dispatch(
        {
            type: LOGIN.LOGIN_DATA
        }
    );

    try {
        const response = await axios({
            method: "post",
            url: loginURL,
            data: loginData,
            headers: { "Content-Type": "multipart/form-data" }
        });
        const {data} = response;
        dispatch(loginStatusAction(data));

        dispatch(
            {
                type: LOGIN.LOGIN_DATA_SUCCESS,
                payload: data
            }
        );
    } catch (error) {
        dispatch(
            {
                type: LOGIN.LOGIN_DATA_ERROR,
                error
            }
        )
    }
};

export default loginAction;