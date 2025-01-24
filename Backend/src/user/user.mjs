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


export default user