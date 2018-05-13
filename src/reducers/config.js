
export default function reducer(state={
        "loaded": false
    }, action){
    switch (action.type){
        case "CONFIG_INITIALISE":{
            let config = require("../config/config.json")
            return {...state, ...config, loaded: true}
        }
        default:{
            return state;
        }
    }
    
}