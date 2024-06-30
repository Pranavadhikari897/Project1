let mongoose = require("mongoose")

let tripsch = new mongoose.Schema({
    "_id":String,
    "startLocation": String,
    "destination": String,
    "startDate": String,
    "endDate": String,
    "modeOfTravel": String,
    "activities": String,
    "notes": String,
    "favourites":String

})
let tripmodel = mongoose.model("trip", tripsch)
module.exports = tripmodel