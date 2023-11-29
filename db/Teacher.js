const mongoose=require("mongoose");
const teacherSchema= new mongoose.Schema({
    tname:String,
    id:Number,
    tpassword:String
});
module.exports=mongoose.model("teachers",teacherSchema)