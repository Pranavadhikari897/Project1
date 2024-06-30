let express=require("express")
let mongoose=require("mongoose")

var bodyParser = require('body-parser')
let cors=require("cors")
const userroute = require("./routes/userRoute")
const triproute = require("./routes/tripRoute")
const feedroute = require("./routes/feedRoute")


let app=express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use("/imgs",express.static("./pimgs"))



mongoose.connect("mongodb://localhost:27017/pranavAss1").then(()=>{
    console.log("ok")
})

app.use("/user",userroute)
app.use("/trip",triproute)
app.use("/feed",feedroute)

app.listen(5000)