const mongoose= require("mongoose");
const attendancelistSchema=new mongoose.Schema({
    sname:{
        type:String,
        required:true,
        maxlenght:15
    },
    roll:{
        type:Number,
        required:true,
        unique:[true, "invalide roll number"],
        maxlength:7
    },
    att:{
        type:String,
        maxlenght:1
    }
})
