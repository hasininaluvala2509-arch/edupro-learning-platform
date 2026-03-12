const Video = require("../models/Video");

// Get all videos
exports.getVideos = async(req,res)=>{

try{

const videos = await Video.find();

res.json(videos);

}

catch(error){

res.status(500).json({message:error.message});

}

};


// Upload new video
exports.uploadVideo = async (req, res) => {

try {

const { title, subject, videoUrl, teacher } = req.body;

const video = new Video({
title,
subject,
videoUrl,
teacher,
rating:0
});

await video.save();

res.json({
message:"Video uploaded successfully"
});

}

catch(error){

res.status(500).json({message:error.message});

}

};