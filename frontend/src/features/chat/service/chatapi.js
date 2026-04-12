import axios from "axios";

const API = axios.create({
  baseURL: "https://sigmagpt-backend-ktzu.onrender.com/api/ai",
});

export const generateCode = async (prompt) => {
  const { data } = await API.post("/generate", { prompt });
  console.log("Raw AI Response:", data);
  const{html,css,js}=data.data.code;

    let cleanHtml = html
      .replace(/<!DOCTYPE html>/gi, "")
      .replace(/<html.*?>/gi, "")
      .replace(/<\/html>/gi, "")
      .replace(/<head>[\s\S]*?<\/head>/gi, "")
      .replace(/<body.*?>/gi, "")
      .replace(/<\/body>/gi, "");

    cleanHtml = cleanHtml
      .replace(/<link.*?>/gi, "")
      .replace(/<script.*?><\/script>/gi, "");
      
    const finalCode = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${cleanHtml}
      <script>${js}</script>
    </body>
    </html>`;
    
  return finalCode;
}  