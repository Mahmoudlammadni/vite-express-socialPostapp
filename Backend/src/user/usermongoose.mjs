import mongoose, { mongo } from "mongoose";
const usery_mongoose = new mongoose.Schema({
    id : {type:mongoose.Schema.Types.Number,require:true,unique:true},
    nom :{type:mongoose.Schema.Types.String,require:true},
    email :{type:mongoose.Schema.Types.String,require:true,unique:true},
    password : {type:mongoose.Schema.Types.String,require:true},
  

})
export const user_coll =mongoose.model("user",usery_mongoose)

