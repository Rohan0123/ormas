import mongoose from '../middleware/mongoose';
const mongoose = require('')

const UserSchema = new mongoose.Schema({
    Name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    repassword: {type:String, required:true},
    
    
}, {timestamps: true});

export default mongoose.model("User", UserSchema)