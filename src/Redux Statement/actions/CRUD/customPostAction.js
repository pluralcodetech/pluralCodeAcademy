const { default: axios } = require("axios");
const { default: CUSTOM_POST } = require("src/Redux Statement/constants/CRUD/customPost")

const customPostAction = (postURL, postDATA) => async dispatch => {
    dispatch({
        type : CUSTOM_POST.CUSTOM_POST_DATA
    });

    try {
        const response = await axios({
            method:'post',
            url : postURL,
            data : postDATA,
            headers : { "Content-Type": "multipart/form-data" }
        });

        const {data} = response
        // console.log(typeof data)

        dispatch({
            type : CUSTOM_POST.CUSTOM_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CUSTOM_POST.CUSTOM_POST_ERROR,
            error
        });
    }
};

export default customPostAction