import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import mongoose from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app=express();
//brew services start mongodb-community@7.0

config({
    path:"./data/config.env"
})

//Using Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
// using Routes

app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)

app.get("/",(req,res)=>{
    res.send("Homepage working")
})

//Using Error MiddleWare
app.use(errorMiddleware)
// /userid/asasas
// /userid/animesh


