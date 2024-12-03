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

contentRouter.delete("/api/v1/deletecontent/:id", userMiddleware, async (req, res) => {
       try {
          // @ts-ignore
          const userId = req.userId;
         if(!userId){res.json("no token")};
 
         if(userId){
             const contentId = req.params.id; 
         if(!contentId){res.json({message: "No content id "})}; 
         const deltedContent = await ContentModel.deleteOne({
             _id :  contentId, 
         })
         res.json({
             messaage: "Content Delted", 
             deltedContent
         })
         }
       } catch (error) {
        res.json({message: "Error Occured"}); 
       }
})

contentRouter.post("/api/v1/brain/share", (req, res) => {

})

contentRouter.get("/api/v1/brain/:shareLink", (req, res) => {

})

export default contentRouter; 