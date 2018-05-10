export default function reducer(state={
        "loaded": false
    }, action){
    switch (action.type){
        case "CONFIG_INITIALISE":{
            let apiData = {url: process.env.REACT_APP_API_URL || '', api_key: process.env.REACT_APP_API_KEY || ''}
            return {...state, api:apiData, loaded: true}
        }
        default:{
            return state;
        }
    }
    
}