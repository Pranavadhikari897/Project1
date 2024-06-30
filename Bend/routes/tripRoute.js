let express=require("express")
const { addtrip, getalltrip, deltrip, edittrip, addToFavourites, search, removeFromFavourites, favourites, date } = require("../controllers/tripCont")

let triproute=new express.Router()

triproute.post("/add",addtrip)
triproute.get("/getall",getalltrip)
triproute.delete("/del/:id",deltrip)
triproute.post("/edit",edittrip)
triproute.post("/addToFavourites",addToFavourites)
triproute.post("/removeFromFavourites",removeFromFavourites)
triproute.get("/favourites",favourites)
triproute.get("/search/:search",search)
triproute.get("/date",date)

module.exports=triproute