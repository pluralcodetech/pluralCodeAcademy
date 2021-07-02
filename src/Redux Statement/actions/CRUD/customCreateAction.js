const { default: CUSTOM_CREATE } = require("src/Redux Statement/constants/CRUD/customCreate")

const customCreateAction = (createUrl, createData) => async dispatch => {
    dispatch({
        type: CUSTOM_CREATE.CUSTOM_CREATE_DATA
    });

    try {
        const response = await axios({
            method : 'post',
            url : createUrl,
            data : createData,
            headers : { "Content-Type": "multipart/form-data"}
        })

        const {data} = response

        dispatch({
            type: CUSTOM_CREATE.CUSTOM_CREATE_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: CUSTOM_CREATE.CUSTOM_CREATE_ERROR,
            error
        });
    }
}