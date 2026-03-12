const User = require("../models/User");

exports.signup = async(req,res)=>{

try{

const user = new User(req.body);

await user.save();

res.json({message:"User created"});

}

catch(error){

res.status(500).json({message:error.message});

}

};