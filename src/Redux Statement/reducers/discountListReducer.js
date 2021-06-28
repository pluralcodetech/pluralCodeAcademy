import DISCOUNT_LIST from "../constants/discountList";

const discountListState = {
    discountList : [],
    loading : false,
    error : null
};

const discountListReducer = (state=discountListState, action) => {
    switch (action.type) {
        case DISCOUNT_LIST.DISCOUNT_LIST_DATA:
            return {
                ...state,
                loading : true,
                error: null
            }
        case DISCOUNT_LIST.DISCOUNT_LIST_SUCCESS:
            return {
                ...state,
                loading : false,
                discountList : action.payload
            }
        case DISCOUNT_LIST.DISCOUNT_LIST_ERROR: 
            return {
                ...state,
                loading : false,
                error: action.error
            }
        default:
            return state
    }
};

export default discountListReducer 