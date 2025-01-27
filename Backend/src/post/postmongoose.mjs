import mongoose, { mongo } from "mongoose";
const post_mongoose = new mongoose.Schema({
    id : {type:mongoose.Schema.Types.Number,require:true,unique:true},
    img :{type:mongoose.Schema.Types.String}, 
    description :{type:mongoose.Schema.Types.String,require:false},
    likes: {type:mongoose.Schema.Types.Number},
    date : {type:mongoose.Schema.Types.Date,require:true},
    liked:{type:mongoose.Schema.Types.Array}

})

export const post_coll =mongoose.model("posts",post_mongoose)


