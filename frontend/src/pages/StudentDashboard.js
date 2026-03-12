import { useEffect,useState } from "react";
import { PieChart, Pie } from "recharts";
import { getVideos, markCompleted, getProgress, getRecommendations } from "../services/api";
import VideoCard from "../components/VideoCard";
import { useNavigate } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import Assignments from "./Assignments";

export default function StudentDashboard(){

const navigate = useNavigate();
const [videos,setVideos] = useState([]);
const [completed,setCompleted] = useState(0);
const [recommended,setRecommended] = useState([]);

// remove recommended videos from main list
const filteredVideos = videos.filter(
  v => !recommended.some(r => r._id === v._id)
);

useEffect(()=>{

fetchVideos();
fetchProgress();
fetchRecommendations();

},[]);

const fetchVideos = async()=>{

const res = await getVideos();
setVideos(res.data);

}

const fetchProgress = async()=>{

const res = await getProgress("24eg112");

setCompleted(res.data.length);

}

const fetchRecommendations = async()=>{

const res = await getRecommendations("24eg112");

setRecommended(res.data);

}

const totalVideos = videos.length;

const data = [
  { name: "Completed", value: completed },
  { name: "Remaining", value: totalVideos - completed }
];


return(

<div style={{
padding:"40px",
maxWidth:"1200px",
margin:"auto"
}}>

<div style={{
display:"flex",
gap:"20px",
marginBottom:"40px"
}}>

<div style={{
background:"#f1f5f9",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
minWidth:"150px"
}}>
<h3>Total Videos</h3>
<p>{videos.length}</p>
</div>

<div style={{
background:"#f1f5f9",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
minWidth:"150px"
}}>
<h3>Completed</h3>
<p>{completed}</p>
</div>

<div style={{
background:"#f1f5f9",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
minWidth:"150px"
}}>
<h3>Remaining</h3>
<p>{videos.length - completed}</p>
</div>

</div>


<h2>Student Progress</h2>

<PieChart width={300} height={300}>
<Pie
data={data}
cx={150}
cy={150}
outerRadius={100}
fill="#8884d8"
dataKey="value"
/>
</PieChart>

<br/>
<h2>Recommended for You</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
marginTop:"20px"
}}
>

{recommended.map((video)=>(

<VideoCard
key={video._id}
video={video}
onComplete={async(id)=>{

await markCompleted({
studentId:"24eg112",
videoId:id
});

navigate(`/assignment/${video.subjec}`);

}}
/>

))}

</div>
<h2 style={{marginTop:"40px",marginBottom:"20px"}}>
Recommended Videos
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))",
justifyItems:"center",
gap: "20px",
marginTop: "20px"
}}
>

{filteredVideos.map((video)=>(

<VideoCard
key={video._id}
video={video}
onComplete={async(id)=>{

await markCompleted({
studentId:"24eg112",
videoId:id
});

navigate(`/assignment/${video.subjec}`);

<button
onClick={async ()=>{
await markCompleted({
studentId:"24eg112",
videoId:video._id
});

navigate(`/assignment/${video._id}`);

}}
>
Attempt Assignment
</button>

fetchProgress();

}}
/>

))}


</div>
<ChatBot/>
</div>

)

}