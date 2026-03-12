import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Sidebar from "./components/Sidebar";
import ParentDashboard from "./pages/ParentDashboard";
import Signup from "./pages/Signup";
import AssignmentQuiz from "./pages/AssignmentQuiz";
import "./styles/dashboard.css";
import SubjectLearning from "./pages/SubjectLearning";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box display="flex">
          <Sidebar />
          <Box flex={1} p={3}>
            <Navbar />
            <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/student" element={<StudentDashboard/>}/>
<Route path="/teacher" element={<TeacherDashboard/>}/>
<Route path="/learn/:subject" element={<SubjectLearning/>}/>

</Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;