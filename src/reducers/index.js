import { combineReducers } from "redux";

import contentReducer from "./content";
import configReducer from "./config";


export default combineReducers({
    "content":contentReducer,
    "config":configReducer
})