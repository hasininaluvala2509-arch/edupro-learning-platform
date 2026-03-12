const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({

studentId:String,
videoId:String,
completed:Boolean

});

module.exports = mongoose.model("Progress",progressSchema);