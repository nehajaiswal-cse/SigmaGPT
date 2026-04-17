const Chat = require("../models/chatmodel.js");

const normalizeMessages = (messages) =>
  messages.map(({ role, content }) => ({
    role: role === "assistant" ? "ai" : role,
    content,
  }));

//  CREATE CHAT
const createChat = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: "Messages required" });
    }

    const normalizedMessages = normalizeMessages(messages);

    const chat = await Chat.create({
      userId: req.user._id, 
      title:
        normalizedMessages[0]?.content?.slice(0, 30) || "New Chat",
      messages: normalizedMessages,
    });

    console.log("CHAT CREATED:", chat);
    res.status(201).json(chat);
  } catch (error) {
    console.error(" CREATE CHAT ERROR:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const getChats = async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user._id })
      .sort({ updatedAt: -1 })
      .select("title updatedAt");

    console.log(" Fetched Chats:", chats);
    res.json(chats);
  } catch (error) {
    console.error(" GET CHATS ERROR:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//  GET CHAT BY ID
const getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    res.json(chat);
  } catch (error) {
    console.error(" GET CHAT BY ID ERROR:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//  UPDATE CHAT
const updateChat = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: "Messages required" });
    }

    const normalizedMessages = normalizeMessages(messages);

    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      { $push: { messages: { $each: normalizedMessages } } },
      { returnDocument: "after" }
    );

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    console.log(" CHAT UPDATED:", chat);
    res.json(chat);
  } catch (error) {
    console.error(" UPDATE CHAT ERROR:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//  DELETE CHAT
const deleteChat = async (req, res) => {
  try {
    const chat = await Chat.findByIdAndDelete(req.params.id);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    console.log("🗑️ CHAT DELETED:", req.params.id);
    res.json({ message: "Chat deleted" });
  } catch (error) {
    console.error(" DELETE CHAT ERROR:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createChat,
  getChats,
  getChatById,
  updateChat,
  deleteChat,
};