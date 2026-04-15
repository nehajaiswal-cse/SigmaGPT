import axios from "axios";

const API = axios.create({
  baseURL: "https://sigmagpt-backend-ktzu.onrender.com/api/ai",
  withCredentials: true,
});

export const generateCode = async (prompt) => {
  
  const { data } = await API.post("/generate", { prompt });
  console.log("Raw AI Response:", data);
  const{html,css,js}=data.data.code;
  return {
    reply: data.data.reply,
    code: { html: html || "<h1>Hello World</h1>", css: css || "", js: js || "" }
  };  
} 

// export const fixCode = async (code) => {
//   const { data } = await API.post("/fix", { code });
//   console.log("Raw AI Response:", data);
//   const{html,css,js}=data.data.code;  
//   return {
//     reply: data.data.reply,
//     code: { html: html || "<h1>Hello World</h1>", css: css || "", js: js || "" }
//   };
// }