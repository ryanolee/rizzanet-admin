export default function reducer(state={
        loaded:false
    }, action){
    switch (action.type){
        case 'API_LOAD_INITIAL_STATE_SUCCESS': {
            return {...state, ...action.payload, loaded:true}
        }
        default:{
            return state;
        }
    }
   
}