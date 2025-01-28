export const add =(tkn)=>{
    return{
          type :"add",
          payload : tkn
    }
  
}

export const remove =(tkn)=>{
    return{
          type :"remove",
          payload : tkn
    }
  
}

export const save =(ps)=>{
    return{
          type :"save",
          payload : ps
    }
  
}