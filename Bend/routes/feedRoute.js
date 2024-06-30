let express=require("express")
const addfeed = require("../controllers/feedCont")


let feedroute=new express.Router()

feedroute.post("/add",addfeed)

module.exports=feedroute