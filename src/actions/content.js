export function getInitialState(path=''){
    return {
        type: "API_LOAD_INITIAL_STATE",
        request: {
            endpoint: "/get/path"
        }
    }
}
export function getChildrenByID(id,parts=[]){
    return {
        type: 'API_GET_CHILDREN',
        request:{
            endpoint: "/get/id/children/"+id+"/",
            params:{
                parts: parts.join(',')
            }
        }
    }
}