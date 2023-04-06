import { combineReducers } from "redux";
import userReducer from "./auth";

// store addlah tempat untuk menyimpan kumpulan reducer
//
const rootReducer = combineReducers({
  auth: userReducer,
});

export default rootReducer;
