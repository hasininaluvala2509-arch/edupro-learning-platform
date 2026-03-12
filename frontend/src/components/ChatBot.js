import { useState } from "react";

export default function ChatBot(){

const [question,setQuestion] = useState("");
const [answer,setAnswer] = useState("");

const askAI = () => {

const q = question.toLowerCase();

if(q.includes("ai") || q.includes("artificial intelligence"))
setAnswer("Artificial Intelligence is the simulation of human intelligence in machines.");

else if(q.includes("machine learning"))
setAnswer("Machine Learning is a subset of AI that allows systems to learn from data.");

else if(q.includes("react"))
setAnswer("React is a JavaScript library used to build user interfaces.");

else if(q.includes("java"))
setAnswer("Java is a popular object-oriented programming language used to build web, mobile, and enterprise applications.");

else if(q.includes("mongodb"))
setAnswer("MongoDB is a NoSQL database that stores data in JSON-like documents.");

else if(q.includes("node"))
setAnswer("Node.js is a runtime environment that allows JavaScript to run on the server.");

else
setAnswer("Try asking about AI, React, Java, Node.js, or Machine Learning.");
};

return(

<div style={{
marginTop:"40px",
background:"#f1f5f9",
padding:"20px",
borderRadius:"10px"
}}>

<h2>AI Learning Assistant</h2>

<input
placeholder="Ask a question..."
value={question}
onChange={(e)=>setQuestion(e.target.value)}
style={{width:"300px",padding:"8px"}}
/>

<button
onClick={askAI}
style={{
marginLeft:"10px",
background:"#2563eb",
color:"white",
padding:"8px"
}}
>
Ask
</button>

<p style={{marginTop:"15px"}}>{answer}</p>

</div>

)

}