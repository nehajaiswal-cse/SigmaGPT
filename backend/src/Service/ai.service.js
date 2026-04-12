const axios = require("axios");
const {extractCodeBlock}= require("./extractCodeBlock");
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
console.log("API KEY:", OPENROUTER_API_KEY);
async function generateResponse(prompt) {
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "deepseek/deepseek-chat", // free model
                messages: [
                    { role: "user", content: prompt }
                ]
            },
            {
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                }
            }
        );

        const data = response.data.choices[0].message.content;

        const codeBlocks = extractCodeBlock(data);

        

        return {
            reply: data,
            code: codeBlocks
        }

    } catch (error) {
        console.error("AI Error:", error.response?.data || error.message);
        return {
          reply: "Error generating response",
         code: { html: "", css: "", js: "" },
       };
    }
}

module.exports = generateResponse;