import {
  CALL_API_REQUEST,
  CALL_API_SUCCESS,
  CALL_API_FAIL,
} from "../constants/demoConstants";
const state = { data: {} };

export const demoReducer = (state, action) => {
  switch (action.type) {
    case CALL_API_REQUEST:
      return {
        loading: true,
      };
    case CALL_API_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case CALL_API_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
