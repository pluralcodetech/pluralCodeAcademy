const { default: axios } = require("axios")
const { default: CUSTOM_STATUS_UPDATE } = require("../constants/customStatusUpdate")

const customStatusUpdateAction = (customUrl, id) => async dispatch =>{
    dispatch ({
        type: CUSTOM_STATUS_UPDATE.CUSTOM_STATUS_UPDATE_DATA,
    })

    try {
        const response = await axios({
            method: 'post',
            url: customUrl,
            data: id,
            headers: { 'Content-Type': 'application/json'}
        })

        const {data} = response;

        dispatch({
            type:  CUSTOM_STATUS_UPDATE.CUSTOM_STATUS_UPDATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CUSTOM_STATUS_UPDATE.CUSTOM_STATUS_UPDATE_ERROR,
            error
        })
    }
}

export default customStatusUpdateAction;