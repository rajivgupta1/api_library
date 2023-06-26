import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role: {
        type : String,
        required: true,
        default:'student',
    },

    fname:{
        type:String,
        trim:true,
    },
    lname:{
        type:String,
        trim:true,
    },
    phone: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: 1,
    },

    address: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
    }
});


export default mongoose.model("user", userSchema);  //users