import { ActionTypes } from "../constants/actionTypes";
import axios from "../../../api/axios";

export const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_USER_REQUEST });
    try {
      const response = await axios.get(`/getUser?userId=${userId}`);
      dispatch({
        type: ActionTypes.FETCH_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// export const updateUser = (userData) => {
//   return async (dispatch) => {
//     dispatch({ type: ActionTypes.UPDATE_USER_REQUEST });
//     try {
//       const response = await axios.put("/api/user", userData);
//       dispatch({
//         type: ActionTypes.UPDATE_USER_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.UPDATE_USER_FAILURE,
//         payload: error.message,
//       });
//     }
//   };
// };

// export const fetchUserDetails = () => {
//   return {
//     type: ActionTypes.FETCH_USER_DETAILS_REQUEST,
//   };
// };
// export const fetchUserDetailsSuccess = () => {
//   return {
//     type: ActionTypes.FETCH_USER_DETAILS_SUCCESS,
//   };
// };
// export const fetchUserDetailsFailure = () => {
//   return {
//     type: ActionTypes.FETCH_USER_DETAILS_FAILURE,
//   };
// };
// export const updateUserDetails = (details) => {
//   return {
//     type: ActionTypes.UPDATE_USER_DETAILS_REQUEST,
//     payload: details,
//   };
// };
// export const updateUserDetailsSuccess = (details) => {
//   return {
//     type: ActionTypes.UPDATE_USER_DETAILS_SUCCESS,
//     payload: details,
//   };
// };
// export const updateUserDetailsFailure = (details) => {
//   return {
//     type: ActionTypes.UPDATE_USER_DETAILS_FAILURE,
//     payload: details,
//   };
// };
// export const updateProfilePic = (file) => {
//   return {
//     type: ActionTypes.UPDATE_PROFILE_PIC,
//     payload: file,
//   };
// };
// export const updateProfilePicSuccess = () => {
//   return {
//     type: ActionTypes.UPDATE_PROFILE_PIC_SUCCESS,
//   };
// };
// export const updateProfilePicFailure = () => {
//   return {
//     type: ActionTypes.UPDATE_PROFILE_PIC_FAILURE,
//   };
// };
// export const deleteProfilePic = () => {
//   return {
//     type: ActionTypes.DELETE_PROFILE_PIC,
//   };
// };
// export const deleteProfilePicSuccess = () => {
//   return {
//     type: ActionTypes.DELETE_PROFILE_PIC_SUCCESS,
//   };
// };
// export const deleteProfilePicFailure = () => {
//   return {
//     type: ActionTypes.DELETE_PROFILE_PIC_FAILURE,
//   };
// };
