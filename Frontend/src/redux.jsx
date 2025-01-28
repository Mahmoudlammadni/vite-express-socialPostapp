const initialState = {
    token : {},
    saved_posts: [],
    id: {}
}



const redux = (state = initialState, action) => {
    switch (action.type) {
      case "add":
        return { ...state, token: action.payload }; 
      case "save":
        const p = state.saved_posts.find((p)=>{return (p.id===action.payload.id)})
        if (!p) {
           return {...state,saved_posts:[...state.saved_posts,action.payload]}
        }
        else{
          return state
        }
       
      case "remove":
        return { ...state, token: null }; 
      case "takeid":
        return {...state,id:action.payload}
      default:
        return state; 
    }
  };
  
  
  export default redux