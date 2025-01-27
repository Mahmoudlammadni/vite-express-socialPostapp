const initialState = {
    token : {}
}



const redux = (state = initialState, action) => {
    switch (action.type) {
      case "add":
        return { ...state, token: action.payload }; 
      case "remove":
        return { ...state, token: null }; 
      default:
        return state; 
    }
  };
  
  
  export default redux