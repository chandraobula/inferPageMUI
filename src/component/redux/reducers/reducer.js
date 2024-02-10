import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  userData: [],
  loading: false,
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    // case ActionTypes.UPDATE_USER_REQUEST:
    //   return { ...state, loading: true, error: null };
    // case ActionTypes.UPDATE_USER_SUCCESS:
    //   return { ...state, loading: false, data: action.payload, error: null };
    // case ActionTypes.UPDATE_USER_FAILURE:
    //   return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default userReducer;
