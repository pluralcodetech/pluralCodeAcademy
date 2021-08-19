const { default: SAND_BOX } = require("../constants/sandBox");

const sandBoxState = {
    sandBox : [],
    isLoading : false,
    error : null
};

const sandBoxReducer = (state = sandBoxState, action) => {
    switch (action.type) {
        case SAND_BOX.SAND_BOX_DATA:
            return {
                ...state,
                isLoading : true,
                error : null
            }
        case SAND_BOX.SAND_BOX_DATA_SUCCESS:
            return {
                ...state,
                isLoading : false,
                sandBox : action.data
            }
        case SAND_BOX.SAND_BOX_DATA_ERROR:
            return {
                ...state,
                isLoading : false,
                error : action.error,
                sandBox: []
            }

        default:
            return state;
    }
}

export default sandBoxReducer;