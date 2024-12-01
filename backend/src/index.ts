
import express from "express";
import { userMiddleware } from "./middleware/middleware";
import { ContentModel } from "./db";
import userRouter from "./routes/userRoute";
import contentRouter from "./routes/contentRoute";


const app = express();
app.use(express.json());



app.use('/user',userRouter); 

app.use('/content',contentRouter); 

app.listen(3000);