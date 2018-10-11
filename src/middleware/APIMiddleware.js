import axios from "axios"; 
/**
 * Middleware for rizzanet api. Looks for action beginning with API_ being dispached. If this is the case it will begin a request an api request.
 */
export default (store) => (next) => (action) => {
    if(/^API_.*/.test(action.type) && ! /(_START|_DONE|_ERROR|_SUCCESS)$/.test(action.type)){
        store.dispatch({type:action.type+"_START"})
        //make a copy of the parameters to use
        var paramsToUse = {...typeof action.request.params === 'undefined' ? {} : action.request.params};
        //use api key if isset
        const state = store.getState();
        if(typeof state.config.api.api_key !== 'undefined'){
            paramsToUse.api_key = state.config.api.api_key
        }
        axios({
            method: "get",
            ...action.request,
            url: state.config.api.url+action.request.endpoint, 
            params: paramsToUse
        })
        .then(data => {
            store.dispatch({
                type: action.type+"_SUCCESS",
                data: data,
                payload: data.data.result
            })
            store.dispatch({
                type: action.type+"_DONE",
            })
        }).catch((error)=>{
            store.dispatch({
                type: action.type+"_ERROR",
                error: error,
                response: error.response
            })
            store.dispatch({
                type: action.type+"_DONE",
            })
        })
    }
    return next(action);
}
