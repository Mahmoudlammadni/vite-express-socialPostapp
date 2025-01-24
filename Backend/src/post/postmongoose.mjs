import mongoose, { mongo } from "mongoose";
const post_mongoose = new mongoose.Schema({
    id : {type:mongoose.Schema.Types.Number,require:true,unique:true},
    titre :{type:mongoose.Schema.Types.String,require:true},
    img :{type:mongoose.Schema.Types.String},
    date : {type:mongoose.Schema.Types.Date,require:true},
    liked:{type:mongoose.Schema.Types.String}

})

export const post_coll =mongoose.model("post",post_mongoose)


