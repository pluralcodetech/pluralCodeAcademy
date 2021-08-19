import axios from "axios";

const { default: UI_UX_LIST } = require("../constants/uiUxList");

const uiUxListAction = () => async dispatch => {
    dispatch(
        {
            type : UI_UX_LIST.UI_UX_LIST_DATA,
        }
    );

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/websiteuiux.php')
        const {data} = response;
        
        dispatch({
            type: UI_UX_LIST.UI_UX_LIST_SUCCESS,
            data
        });
    } catch (error) {
        dispatch({
            type: UI_UX_LIST.UI_UX_LIST_ERROR,
            error
        })
    }
}

export default uiUxListAction;