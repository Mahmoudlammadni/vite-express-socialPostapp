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

export default post