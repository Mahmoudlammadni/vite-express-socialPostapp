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

export default user