import { combineReducers } from "redux";
import { userReducer } from "../reducers/reducer";

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
