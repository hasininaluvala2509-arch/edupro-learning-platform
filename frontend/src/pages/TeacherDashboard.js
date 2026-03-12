import { useState } from "react";
import { uploadVideo } from "../services/api";

export default function TeacherDashboard(){

const [title,setTitle] = useState("");
const [subject,setSubject] = useState("");
const [videoUrl,setVideoUrl] = useState("");
const [teacher,setTeacher] = useState("");

const handleUpload = async ()=>{

await uploadVideo({
title,
subject,
videoUrl,
teacher
});

alert("Video Uploaded");

}

return(

<div style={{padding:"40px"}}>

<h2>Teacher Upload Video</h2>

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input
placeholder="Subject"
onChange={(e)=>setSubject(e.target.value)}
/>

<br/><br/>

<input
placeholder="Video URL"
onChange={(e)=>setVideoUrl(e.target.value)}
/>

<br/><br/>

<input
placeholder="Teacher Name"
onChange={(e)=>setTeacher(e.target.value)}
/>

<br/><br/>

<button onClick={handleUpload}>
Upload Video
</button>

</div>

)

}