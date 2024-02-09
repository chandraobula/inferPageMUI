import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
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
export default reducer;
// export const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS:
//       return state;
//     default:
//       return state;
//   }
// };
