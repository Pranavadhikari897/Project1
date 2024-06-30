const feedmodel = require("../models/feedModel")

let addfeed=async(req,res)=>{
    try{
        await feedmodel({...req.body}).save()
        res.json({"msg":"Feedback Added"})
    }
    catch(error){
        console.log(error)
    }
}
module.exports=addfeed