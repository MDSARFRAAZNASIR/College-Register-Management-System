const mongoose=require("mongoose");
const mathfSchema=new mongoose.Schema({
    chroll:Number,
    chname:String,
    chmse:Number,
    chmsel:Number,
    chmsee:Number,
    chmsell:Number,
    chprs:Number
});
module.exports=mongoose.model("csechemis",mathfSchema);
