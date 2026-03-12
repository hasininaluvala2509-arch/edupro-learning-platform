import axios from "axios";
export const getVideos = () => API.get("/videos");
export const uploadVideo = (data) => API.post("/upload-video", data);
export const markCompleted = (data) => API.post("/progress", data);
export const getProgress = (studentId) => API.get(`/progress/${studentId}`);
export const getRecommendations = (studentId)=>
API.get(`/recommend/${studentId}`);

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const login = (id) => API.post("/auth/demo-login", { id });

export default API;