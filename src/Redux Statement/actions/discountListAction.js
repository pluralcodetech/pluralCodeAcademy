import axios from "axios";
import DISCOUNT_LIST from "../constants/discountList";



const discountListAction = () => async dispatch => {
    dispatch({
        type: DISCOUNT_LIST.DISCOUNT_LIST_DATA
    })

    try {
        const response = await axios.get('https://pluralcode.academy/academyAPI/api/discountcourse.php')
        const {data} = response;
        console.log(data)

        dispatch({
            type: DISCOUNT_LIST.DISCOUNT_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: DISCOUNT_LIST.DISCOUNT_LIST_ERROR,
            error
        });
    }
};

export default discountListAction