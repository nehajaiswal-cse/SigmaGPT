//google ai studio
require("dotenv").config();
console.log("API KEY:", process.env.GOOGLE_GENAI_API_KEY);
const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GOOGLE_GENAI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Joke related to programming",
  });
  console.log(response.text);
}

main();