const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api",require("./routes/videoRoutes"));
app.use("/api",require("./routes/progressRoutes"));
app.use("/api", require("./routes/recommendRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/assignmentRoutes"));

app.get("/",(req,res)=>{
res.send("EDUPRO API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log(`Server running on ${PORT}`)
})