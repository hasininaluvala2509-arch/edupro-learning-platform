exports.demoLogin = async(req,res)=>{

const {id} = req.body

let role=""

if(id==="24eg112") role="student"
if(id==="24eg113") role="teacher"
if(id==="24eg114") role="parent"

res.json({
success:true,
role
})

}