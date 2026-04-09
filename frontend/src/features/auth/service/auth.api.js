import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

const api=axios.create({
    baseURL:API_URL,
    withCredentials:true
})

// Add token to Authorization header if it exists in localStorage
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export async function register({username,email,password}){
    try{
        const response= await api.post('/register',{
           username,email,password  
         },{
        withCredentials:true //access to read the cookies
    })
    // Store token in localStorage if received in response
    if(response.data.token){
        localStorage.setItem('token', response.data.token)
    }
    return response.data
    } catch(e) {
       console.log(e.response.data);
       throw e
    }
    
}

export async function login({email,password}){
    try{
         const response = await api.post("/login",{
            email,password
         })
         // Store token in localStorage if received in response
         if(response.data.token){
            localStorage.setItem('token', response.data.token)
         }
        
        return response.data
    }
    catch(e){
        if (e.response && e.response.data) {
      return e.response.data;   // return backend error message
     }

    return { message: "Network error" };
    }
}

export async function logout() {
    try{
        const response = await api.get("/logout")
        // Remove token from localStorage
        localStorage.removeItem('token')
        return response.data
    }
    catch(e){
        console.log(e);
        // Still remove token even if logout fails
        localStorage.removeItem('token')
    }
}

export async function getMe() {
    try{
        const response = await api.get("/get-me")
        return response.data
     }
    catch(e){
        console.log(e.response.data);
         return null 
    }
}
















//     Frontend data send karta hai backend ko  using Axios
//  Backend data process karke response return karta hai
// Frontend response ke basis pe UI update karta hai