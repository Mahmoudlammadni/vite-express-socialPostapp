import mongoose from "mongoose";
import { user_coll } from "./usermongoose.mjs";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config()
const user = Router()
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log('connected to user'))
.catch(()=>console.log("error de connection")
)

export default user