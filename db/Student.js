const mongoose=require("mongoose");
const studentSchema= new mongoose.Schema({
    sname:{
        type:String,
        required:true,
        maxlenght:15
    },
    email:{
        type:String,
        unique:[true,"Email id already persent"],
        validate(value){
            if(!validator.isemail(value)){
                throw  error("Email id Invalid")
            }
        }
    },
    
    roll:{
        type:Number,
        required:true,
        unique:[true, "invalide roll number"],
        maxlength:7
    },
    spassword:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("students", studentSchema)

