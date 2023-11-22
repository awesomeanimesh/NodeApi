import express from "express";
import userRouter from "./routes/user.js"
import mongoose from "mongoose";
import { config } from "dotenv";

export const app=express();
//brew services start mongodb-community@7.0

config({
    path:"./data/config.env"
})

//Using Middlewares
app.use(express.json());
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Homepage working")
})


// /userid/asasas
// /userid/animesh


