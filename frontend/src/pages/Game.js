import { useState } from "react";

export default function Game(){

const question = "What is React?";

const options = [
"Library",
"Database",
"Operating System"
];

const [result,setResult] = useState("");

const checkAnswer = (answer)=>{

if(answer==="Library")
setResult("Correct!");

else
setResult("Wrong answer");

}

return(

<div style={{padding:"40px"}}>

<h2>Learning Game</h2>

<p>{question}</p>

{options.map((o)=>(

<button
key={o}
onClick={()=>checkAnswer(o)}
style={{margin:"10px"}}
>
{o}
</button>

))}

<p>{result}</p>

</div>

)

}