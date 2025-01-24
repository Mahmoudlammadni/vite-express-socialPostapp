import express from "express";
import dotenv from "dotenv";
import post from "./post/post.mjs";
dotenv.config()
const app = new express()
app.use(express.json())
app.use(post)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is runnig on ${port}`);
    
})