import mongoose from "mongoose";
import { post_coll } from "./postmongoose.mjs";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config()
const post = Router()
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log('connected to post'))
.catch(()=>console.log("error de connection")
)

post.get('/api/post',async(req,res)=>{
    const posts = await post_coll.find()
    posts?res.status(200).send(posts):res.sendStatus(404)
})

post.post('/api/add/post', async (req, res) => {
    const { body: { img, description, date } } = req;

    if (isNaN(img) && description && date) {
        const data = await post_coll.find();
        const lastid = data[data.length-1].id+1
        const post = {id:lastid,img:img, description: description,likes: 0,date: date,liked: []};
        const add = await post_coll.insertMany([post]); 
        const data2 = await post_coll.find();
        add ? res.status(200).send(data2) : res.sendStatus(404);
    } else {
        return res.sendStatus(400);
    }
});

export default post