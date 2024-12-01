import express  from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { UserModel } from "../db";
import { JWT_SECRET } from "../config";

const userRouter = express.Router();

const JWT_PASSWORD = JWT_SECRET; 

userRouter.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hashedPass = await bcrypt.hash(password,5); 
    try {
       const user =  await UserModel.create({
            username: username,
            password: hashedPass
        }) 

        if(user){
            const token  = jwt.sign({id:user._id},JWT_SECRET); 
            res.cookie("token",token,{
                httpOnly: true,
                sameSite: "strict",

            })
            res.json({
                message: "User signed up",
            })
        }else{
            res.json("Trouble signing-up in "); 
        }
                

    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})

userRouter.post("/api/v1/signin", async (req, res) => {
   try {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
    })
    if(!existingUser){
         res.status(403).json({message: "user not find"}); 
    }
    if (existingUser) {
        const hashedPass = await bcrypt.compare(password,existingUser.password); 

        if(!hashedPass){  res.status(403).json({ message: "Incorrect credentials" });}
        
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.cookie("token",token,{
            httpOnly: true,
            sameSite: "strict",

        })
        
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrrect credentials"
        })
    }
   } catch (error) {
    console.log("error"); 
    res.json("Error Occred"); 

   }
})

userRouter.post("/api/v1/logout",async (req , res)=>{
    res.clearCookie("token"); 
    res.json("Loogedout"); 
})

export default userRouter; 