const Progress = require("../models/Progress");

exports.markCompleted = async(req,res)=>{

try{

const {studentId,videoId} = req.body;

const progress = new Progress({
studentId,
videoId,
completed:true
});

await progress.save();

res.json({message:"Video marked completed"});

}

catch(error){

res.status(500).json({message:error.message});

}

};

exports.getProgress = async(req,res)=>{

try{

const { studentId } = req.params;

const progress = await Progress.find({ studentId });

res.json(progress);

}

catch(error){

res.status(500).json({message:error.message});

}

}