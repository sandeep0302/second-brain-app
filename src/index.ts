import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";

const app = express();
app.use(express.json());

const JWT_PASSWORD = "asdfg";

app.post('/api/v1/signup', async (req,res) => {

    const username = req.body.username;
    const password = req.body.password;
try{

   await  UserModel.create({
        username:username,
        password:password
    })
    res.json({
       message:"user signed up successfully"
    })
}catch(e){
    res.status(411).json({
        message:"user already exists"
    })
}
})

app.post('/api/v1/signin', async (req,res) => {

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })
if(existingUser){
    const token = jwt.sign({
        id:existingUser._id
    },JWT_PASSWORD)
    res.json({
        token
    })
}else {
    res.json(403).json({
        message:"Incorrect credentials"
    })
}
})



app.listen(3000);
