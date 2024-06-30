let mongoose=require("mongoose")

let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    
})
let usermodel=mongoose.model("user",usersch)
module.exports=usermodel