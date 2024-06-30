let mongoose=require("mongoose")

let feedsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "experiance":String,
    "suggestions":String
    
})
let feedmodel=mongoose.model("feedback",feedsch)
module.exports=feedmodel