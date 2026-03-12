const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

name:String,
age:Number,
level:String,
purpose:String,
interests:[String]

});

module.exports = mongoose.model("User",userSchema);