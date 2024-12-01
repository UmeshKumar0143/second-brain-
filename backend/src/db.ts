import mongoose, {model, Schema} from "mongoose";
import { MONGO_URL } from "./config";

mongoose.connect(MONGO_URL); 
console.log("Connected"); 
const UserSchema = new Schema({
    name: String, 
    username: {type: String, unique: true},
    password: {type: String , required : true}
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String, 
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

export const ContentModel = model("Content", ContentSchema);