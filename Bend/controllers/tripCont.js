const tripmodel = require("../models/tripModel")
let {v4:uuid4}=require("uuid")

let addtrip=async(req,res)=>{
    try{
        let id=uuid4()
        await tripmodel({...req.body,"_id":id}).save()
        res.json({"msg":"Trip Added"})
    }
    catch(error){
        console.log(error)
    }
}

let getalltrip=async(req,res)=>{
    try{
        let data=await tripmodel.find()
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
}

let deltrip=async(req,res)=>{
    try{
        await tripmodel.deleteOne({"_id":req.params.id})
        res.json({"msg":"trip deleted"})
    }
    catch(err){

    }
}

let edittrip=async(req,res)=>{
    try{
        console.log("edit")
        await tripmodel.findByIdAndUpdate({"_id":req.body._id},{...req.body})
        res.json({"msg":"trip edited"})
    }
    catch(err){

    }
}
let addToFavourites=async(req,res)=>{
    try{
        await tripmodel.findByIdAndUpdate({"_id":req.body._id},{"favourites":req.body.favourites})
        res.json({"msg":"added to favourites"})

    }
    catch(err){
        console.log(err)

    }
}
let removeFromFavourites=async(req,res)=>{
    try{
        await tripmodel.findByIdAndUpdate({"_id":req.body._id},{"favourites":req.body.favourites})
        res.json({"msg":"removed from favourites"})

    }
    catch(err){
        console.log(err)

    }

}
let favourites=async(req,res)=>{
    try{
        let data=await tripmodel.find({"favourites":"Yes"})
        res.json(data)


    }
    catch(err){

    }
}
let search=async(req,res)=>{
    console.log(req.params)
    try{
    let data=await tripmodel.find({$or:[{"startLocation":{$regex:req.params.search}},{"destination":{$regex:req.params.search}},
        {"modeOfTravel":{$regex:req.params.search}},
        {"activities":{$regex:req.params.search}},{"notes":{$regex:req.params.search}}

    ]})
    console.log(data)
    res.json(data)
}
catch(err){

}
}
let date=async(req,res)=>{
    try{
        let data=await tripmodel.find().sort({"startDate":1,"endDate":1})
        res.json(data)

    }
    catch(err){

    }
}

module.exports={addtrip,getalltrip,deltrip,edittrip,addToFavourites,removeFromFavourites,favourites,search,date}