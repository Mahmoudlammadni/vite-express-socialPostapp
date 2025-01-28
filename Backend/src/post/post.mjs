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

post.patch('/api/post/modify/:idp/:idu',async(req,res)=>{
const {idp,idu}=req.params
const id_post = parseInt(idp)
const id_user = parseInt(idu)
if (!isNaN(id_post && id_user)) {
 const target_post = await post_coll.findOne({id:id_post})
 if (target_post) {
    const liked_People = target_post.liked
    if (!liked_People.includes(id_user)) {
        const like = await post_coll.findOneAndUpdate({id:id_post},{$inc:{"likes":1},$push:{"liked":id_user}})
        const data = await post_coll.find()
        res.status(200).send(data)
    }
    else{
        const like = await post_coll.findOneAndUpdate({id:id_post},{$inc:{"likes":-1},$pull:{"liked":id_user}})
        const data = await post_coll.find()
        res.status(200).send(data)
    }
 } 
 else{
    res.sendStatus(404)
 } 
}
else{
    res.sendStatus(400)
 }
})

export default post