const initialstate = {
    token : {}
}
const redux = (state=initialstate,action)=>{
    switch (action.type) {
        case "add":
            return{...state,token:action.payload}
        case "remove":
            return {...state,token:""}
     
        default:
            return state
    }
}
export default redux