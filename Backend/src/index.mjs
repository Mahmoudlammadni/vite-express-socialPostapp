import express from "express";

const app = new express()
const port = 3019
app.listen(port,()=>{
    console.log(`server is runnig on ${port}`);
    
})