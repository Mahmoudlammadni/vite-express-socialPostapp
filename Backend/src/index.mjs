import express from "express";
import dotenv from "dotenv";
import post from "./post/post.mjs";
import user from "./user/user.mjs";
dotenv.config()
const app = new express()
app.use(express.json())
app.use(post)
app.use(user)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is runnig on ${port}`);
    
})