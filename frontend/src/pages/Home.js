import { useNavigate } from "react-router-dom";

export default function Home(){

const navigate = useNavigate();

return(

<div style={{
height:"100vh",
background:"linear-gradient(135deg,#0f766e,#1f2937)",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
color:"white",
textAlign:"center"
}}>

<h1 style={{fontSize:"48px"}}>
Empowering Education,
<span style={{color:"#f59e0b"}}> One Click </span>
at a Time
</h1>

<p style={{marginTop:"10px"}}>
Join as a Student, Teacher, or Mentor
</p>

<button
onClick={()=>navigate("/login")}
style={{
marginTop:"30px",
background:"#f59e0b",
padding:"12px 30px",
border:"none",
borderRadius:"10px",
fontSize:"18px",
cursor:"pointer"
}}
>
Get Started →
</button>

</div>

)

}