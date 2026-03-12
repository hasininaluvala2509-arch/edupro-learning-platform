import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SubjectLearning(){

const { subject } = useParams();

const questions = [
{
q:"What is basic concept of "+subject+" ?",
options:["Option A","Option B","Option C"],
answer:0
},
{
q:"Which is used in "+subject+" ?",
options:["Tool 1","Tool 2","Tool 3"],
answer:1
}
];

const [score,setScore] = useState(0);

return(

<div style={{padding:"40px"}}>

<h1>{subject} Learning</h1>

<h2>Assignment</h2>

{questions.map((q,i)=>(
<div key={i} style={{marginBottom:"20px"}}>

<p>{q.q}</p>

{q.options.map((op,j)=>(
<button
key={j}
onClick={()=>{
if(j===q.answer) setScore(score+1)
}}
style={{
marginRight:"10px",
padding:"8px 15px"
}}
>
{op}
</button>
))}

</div>
))}

<h3>Your Score: {score}</h3>

</div>

)

}