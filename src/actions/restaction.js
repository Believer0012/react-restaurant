import axios from "axios";
import { SUCCESS,FAIL } from "../constants/firstconstant";

export const restList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/restaurants.json')
        //console.log(data.resturants);
        dispatch(
        {
            payload:data.restaurants,
            type:SUCCESS
        }
        )
    }
    catch(error){
    dispatch(
        {
            payload:error,
            type:FAIL
        }
    )
    }
}