import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
});


// const combineReducers = require('redux').combineReducers;
// const authReducer = require("./authReducer");

// module.exports = combineReducers({
//     auth: authReducer,
// })



