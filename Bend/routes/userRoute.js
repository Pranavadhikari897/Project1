let express=require("express")
const { reg,login } = require("../controllers/userCont")


let userroute=new express.Router()

userroute.post("/reg",reg)
userroute.post("/login",login)

module.exports=userroute