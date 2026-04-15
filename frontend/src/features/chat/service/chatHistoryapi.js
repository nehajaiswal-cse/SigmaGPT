import axios from "axios";

const API = axios.create({
  baseURL: "https://sigmagpt-backend-ktzu.onrender.com/api/chats",
});

// Add token to Authorization header if it exists in localStorage
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



export const getChats = () => API.get("/");


export const getChatById = (id) => API.get(`/${id}`);


export const createChat = (messages) =>
  API.post("/", { messages });


export const updateChat = (id, messages) =>
  API.put(`/${id}`, { messages });

export const deleteChat = (id) => API.delete(`/${id}`);