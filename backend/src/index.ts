
import express from "express";
import userRouter from "./routes/userRoute";
import contentRouter from "./routes/contentRoute";
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cookieParser()); 

app.use(cors({origin:"http://localhost:5173",credentials:true})); 

app.options('*', cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));

app.use('/user',userRouter); 

app.use('/content',contentRouter); 

app.listen(3000);