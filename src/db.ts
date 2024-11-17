import mongoose, {model,Schema} from "mongoose";

mongoose.connect(process.env.MONGO_URL)


const UserSchema = new Schema({
    username:{type:String,unique:true},
    password:String
})

export const UserModel = model("User",UserSchema);

