import { useEffect,useState } from "react";
import { getProgress } from "../services/api";

export default function ParentDashboard(){

const [progress,setProgress] = useState([]);

useEffect(()=>{

fetchProgress();

},[]);

const fetchProgress = async()=>{

const res = await getProgress("24eg112");

setProgress(res.data);

}

return(

<div style={{padding:"40px"}}>

<h2>Parent Monitoring Dashboard</h2>

<p>Videos Watched: {progress.length}</p>

</div>

)

}