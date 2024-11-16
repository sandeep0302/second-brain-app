import {model,Schema} from "mongoose";

mongoose


const UserSchema = new Model ({
    username:{type:String,unique:true},
    password:String
})

export const userModel = model("User",UserSchema);

