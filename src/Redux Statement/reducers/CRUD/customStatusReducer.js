const { CUSTOM_STATUS } = require("src/Redux Statement/constants/CRUD/customStatus")

const customStatusState = {
    customStatus : []
}

export const customStatusReducer = (state = customStatusState, action) => {
    switch (action.type) {
        case CUSTOM_STATUS.CUSTOM_STATUS_READ:
            return {
                ...state,
                customStatus : action.payload
            }
        default:
            return state
    }
}

