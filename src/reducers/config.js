
export default function reducer(state={
        "loaded": false
    }, action){
    switch (action.type){
        case "CONFIG_INITIALISE":{
            let config = require("../config/config.json");
            config.api.url = process.env.REACT_APP_API_URL || config.api.url;
            return {...state, ...config, loaded: true};
            
        }
        default:{
            return state;
        }
    }
    
}