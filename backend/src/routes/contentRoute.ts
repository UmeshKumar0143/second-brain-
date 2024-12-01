import express from 'express'; 
import { ContentModel } from '../db';
import { userMiddleware } from '../middleware/middleware';

const contentRouter = express.Router(); 

contentRouter.post("/api/v1/addcontent", userMiddleware, async (req, res) => {
   const {title, type,link} = req.body; 
    const content = await ContentModel.create({
        title: title,
        link: link,
        type: type,
        //@ts-ignore
        userId: req.userId,
    })

    res.json({
        message: "Content added",
        content
    })
    
})

contentRouter.get("/api/v1/getcontent", userMiddleware, async (req, res) => {
   try {
     // @ts-ignore
     const userId = req.userId;
     if(!userId){res.json("no token")}; 
     const content = await ContentModel.find({
         userId: userId
     }).populate("userId", "username")
     res.json({
         content
     })
   } catch (error) {
    res.json({mesage: 'error'})
   }
})

contentRouter.delete("/api/v1/deletecontent", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

contentRouter.post("/api/v1/brain/share", (req, res) => {

})

contentRouter.get("/api/v1/brain/:shareLink", (req, res) => {

})

export default contentRouter; 