const generateResponse  = require("../Service/ai.service");
const extractJSON = require("../utils/extractJSON");

async function generateCodeController(req, res) {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const aiText = await  generateResponse(prompt);
    console.log("✅ FULL RESPONSE:", JSON.stringify(aiText, null, 2));
    // const parsed = extractJSON(aiText);

    res.status(200).json({
      success: true,
      data: aiText,
    });

  } catch (error) {
    console.error("AI Controller Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

module.exports = { generateCodeController };