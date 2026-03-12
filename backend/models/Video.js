const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({

title:String,
subject:String,
videoUrl:String,
teacher:String,
rating:Number

});

module.exports = mongoose.model("Video",videoSchema);