import { useState } from "react";
import axios from "axios";

export default function Signup(){

const [form,setForm] = useState({
name:"",
age:"",
level:"",
purpose:"",
interests:[]
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleInterest = (e)=>{
const value = e.target.value;

if(e.target.checked){
setForm({...form,interests:[...form.interests,value]});
}else{
setForm({
...form,
interests:form.interests.filter(i=>i!==value)
});
}
};

const handleSubmit = async()=>{

await axios.post("http://localhost:5000/api/signup",form);

alert("User created");

};

return(

<div style={{padding:"40px"}}>

<h2>Signup</h2>

<input
placeholder="Name"
name="name"
onChange={handleChange}
/>

<br/><br/>

<input
placeholder="Age"
name="age"
onChange={handleChange}
/>

<br/><br/>

<select name="level" onChange={handleChange}>
<option>Select Level</option>
<option>School</option>
<option>Undergraduate</option>
<option>Graduate</option>
<option>Other</option>
</select>

<br/><br/>

<input
placeholder="Purpose of using platform"
name="purpose"
onChange={handleChange}
/>

<br/><br/>

<h4>Select Interests</h4>

<label>
<input type="checkbox" value="AI" onChange={handleInterest}/>
AI
</label>

<br/>

<label>
<input type="checkbox" value="Programming" onChange={handleInterest}/>
Programming
</label>

<br/>

<label>
<input type="checkbox" value="Science" onChange={handleInterest}/>
Science
</label>

<br/>

<label>
<input type="checkbox" value="Math" onChange={handleInterest}/>
Math
</label>

<br/><br/>

<button onClick={handleSubmit}>
Signup
</button>

</div>

)

}