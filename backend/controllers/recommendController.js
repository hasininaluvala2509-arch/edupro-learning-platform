const Video = require("../models/Video");
const User = require("../models/User");
const Progress = require("../models/Progress");

exports.getRecommendations = async (req,res)=>{

try{

const { studentId } = req.params;

const user = await User.findOne({ studentId });

if(!user){
return res.json([]);
}

const watched = await Progress.find({ studentId });

const watchedIds = watched.map(p=>p.videoId);

const videos = await Video.find({
subject: { $in: user.interests || [] },
_id: { $nin: watchedIds }
}).limit(2);

res.json(videos);

}

catch(error){

console.log(error);
res.status(500).json({message:error.message});

}

}