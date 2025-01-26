import express from "express";
import dotenv from "dotenv";
import post from "./post/post.mjs";
import user from "./user/user.mjs";
import cors from "cors";
dotenv.config()
const app = new express()
app.use(cors());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(post)
app.use(user)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is runnig on ${port}`);
    
})