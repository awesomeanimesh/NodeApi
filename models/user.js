import mongoose from "mongoose"

const schema=new mongoose.Schema({
    name:  {
        type:String,
        required:true,
    } ,
    email : {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true,
        select: false //password will not be shared when we fetch user data
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export const User=mongoose.model("User",schema)