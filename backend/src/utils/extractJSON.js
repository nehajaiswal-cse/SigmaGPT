function extractJSON(text) {
  try {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("No valid JSON found in AI response");
    }

    const jsonString = text.substring(start, end + 1);

    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error("Failed to parse AI response JSON");
  }
}

module.exports = extractJSON;