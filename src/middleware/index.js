import {applyMiddleware} from "redux";
import APIMiddleware from './APIMiddleware';
import logger from "redux-logger";

let prod_mode = process.env.NODE_ENV === "production";
var middleware;
if(prod_mode){
    middleware = applyMiddleware(APIMiddleware);
}
else{
    middleware = applyMiddleware(APIMiddleware, logger);
}
export default middleware;