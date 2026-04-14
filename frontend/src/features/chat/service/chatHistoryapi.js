import axios from "axios";

const API = axios.create({
  baseURL: "https://sigmagpt-backend-ktzu.onrender.com/api/ai",
});

// Add token to Authorization header if it exists in localStorage
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



export const getChats = () => API.get("/chat");


export const getChatById = (id) => API.get(`/chat/${id}`);


export const createChat = (messages) =>
  API.post("/chat", { messages });


export const updateChat = (id, messages) =>
  API.put(`/chat/${id}`, { messages });

export const deleteChat = (id) => API.delete(`/chat/${id}`);