import axios from "axios";
import {
  CALL_API_REQUEST,
  CALL_API_SUCCESS,
  CALL_API_FAIL,
} from "../constants/demoConstants";

export const demoAction = () => async (dispatch) => {
  try {
    dispatch({
      type: CALL_API_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get("http://localhost:8000/hello", config);
    console.log(data);

    dispatch({
      type: CALL_API_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CALL_API_FAIL,
      payload: "Error Occured",
    });
  }
};
