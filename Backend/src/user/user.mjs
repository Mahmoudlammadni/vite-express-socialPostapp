import mongoose from "mongoose";
import { user_coll } from "./usermongoose.mjs";
import { Router } from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config()
const code = parseInt(process.env.CODE_HASH)
const user = Router()


mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log('connected to user'))
.catch(()=>console.log("error de connection")
)
user.get('/api/users', async(req,res)=>{
    const data = await user_coll.find()
    data?res.status(200).send(data):res.sendStatus(404)
})

user.post('/api/user/add',async(req,res)=>{
    const {nom,email,password}=req.body
    const data = await user_coll.find()
    if (isNaN(nom && email )&& password) {
        const new_id = await data[data.length-1].id+1
        const new_password= await bcrypt.hash(password,code)
        const ob= {id:new_id,nom:nom,email:email,password:new_password}
        const add = await user_coll.insertMany(ob)
        const data2 = await user_coll.find()
        if (add) {
            res.status(200).send(data2)
        }
    }
    else{
        res.sendStatus(404)
    }
})

user.delete('/api/user/delete/:id',async(req,res)=>{
    const {params:{id}}=req
    const parsed= parseInt(id)
    if (!isNaN(parsed)) {
        const del = await user_coll.findOneAndDelete({id:parsed})
        del?res.status(200).send("Deleted successfully"):res.sendStatus(404)
    }
    else{
        return res.sendStatus(400)
    }
})

user.put('/api/user/mod/:id',async(req,res)=>{
    const {params:{id},body:{nom,email,password}}=req
    const parse_id=parseInt(id)
    if (!isNaN(id)) {
        if (isNaN(nom && email)&& password) {
            const hashed_password = await bcrypt.hash(password,code)
            console.log(hashed_password);
            const the_user= {id:parse_id,nom:nom,email:email,password:hashed_password}
            const Modified =await user_coll.findOneAndUpdate({id:parse_id},the_user);
            const data = await user_coll.find()
            Modified?res.status(200).send(data):res.sendStatus(404)
        }
        else{
            return res.status(404).send("bad given data")
        }
    }
    else{
        return res.status(404).send("id should be a number")
    }
})
export default user