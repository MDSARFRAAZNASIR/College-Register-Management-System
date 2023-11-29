const mongoose=require("mongoose");
const mathfSchema=new mongoose.Schema({
    mroll:Number,
    mname:String,
    mmse:Number,
    mmsee:Number
});
module.exports=mongoose.model("mathfs",mathfSchema);
