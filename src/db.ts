import mongoose, {model,Schema} from "mongoose";

mongoose.connect("mongodb+srv://sandeepgsgggg:sandeep123@cluster0.flofr.mongodb.net/")


const UserSchema = new Schema({
    username:{type:String,unique:true},
    password:String
})

export const UserModel = model("User",UserSchema);

