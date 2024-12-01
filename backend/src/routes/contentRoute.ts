import express from 'express'; 

const contentRouter = express.Router(); 

contentRouter.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        //@ts-ignore
        userId: req.userId,
    })

    res.json({
        message: "Content added"
    })
    
})

contentRouter.get("/api/v1/content", userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

contentRouter.delete("/api/v1/content", userMiddleware, async (req, res) => {
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