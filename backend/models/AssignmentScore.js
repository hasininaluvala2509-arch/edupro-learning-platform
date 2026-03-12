const mongoose = require("mongoose");

const schema = new mongoose.Schema({

studentId:String,
subject:String,
score:Number

});

module.exports = mongoose.model("AssignmentScore",schema);