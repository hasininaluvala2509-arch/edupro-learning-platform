const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({

title:String,
subject:String,

questions:[String],

answers:[String]

});

module.exports = mongoose.model("Assignment",assignmentSchema);