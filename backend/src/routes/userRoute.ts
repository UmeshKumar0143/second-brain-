import express  from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { UserModel } from "../db";
import { JWT_SECRET } from "../config";

const userRouter = express.Router();

const JWT_PASSWORD = JWT_SECRET; 

userRouter.post("/api/v1/signup", async (req, res) => {
    const {name, email , password} = req.body; 
    const hashedPass = await bcrypt.hash(password,5); 
    try {
       const user =  await UserModel.create({
            name: name, 
            username: email,
            password: hashedPass
        }) 

        if(user){
            const token  = jwt.sign({id:user._id},JWT_SECRET); 
            res.cookie("token",token,{
                httpOnly: true,
                sameSite: "strict",

            })
            res.status(200).json({
                user,
                message: "User signed up",
            })
        }else{
            res.json("User not created"); 
        }
                

    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})

userRouter.post("/api/v1/signin", async (req, res) => {
   try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password);
    const existingUser = await UserModel.findOne({
        username: email,
    })
    console.log(existingUser); 
    // if(!existingUser){
    //      res.status(403).json({message: "user not find"}); 
    // }
    if (existingUser) {
        const hashedPass = await bcrypt.compare(password,existingUser.password); 

        if(!hashedPass){  res.status(403).json({ message: "Incorrect credentials" });
    }else{
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.cookie("token",token,{
            httpOnly: true,
            sameSite: "strict",

        })
        res.status(200).json({existingUser}); 
    }
        
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