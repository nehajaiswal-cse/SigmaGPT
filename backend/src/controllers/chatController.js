const Chat= require("../models/chatmodel.js")
  
const normalizeMessages = (messages) =>
  messages.map(({ role, content }) => ({
    role: role === "assistant" ? "ai" : role,
    content,
  }));

const createChat = async (req, res) => {
  try {
    const { messages } = req.body;
   console.log(messages);
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: "Messages required" });
    }

    const normalizedMessages = normalizeMessages(messages);

    const chat = await Chat.create({
      userId: req.user.id,
      title: normalizedMessages[0]?.content?.slice(0, 30) || "New Chat",
      messages: normalizedMessages,
    });

    res.status(201).json(chat);
  } catch (error) {
    console.error("CREATE CHAT ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

 const getChats = async (req, res) => {
  const chats = await Chat.find({ userId: req.user._id })
    .sort({ updatedAt: -1 })
    .select("title updatedAt");

  res.json(chats);
};

const getChatById = async (req, res) => {
  const chat = await Chat.findById(req.params.id);

  res.json(chat);
};

const updateChat = async (req, res) => {
  const { messages } = req.body;
  const normalizedMessages = normalizeMessages(messages);

  const chat = await Chat.findByIdAndUpdate(
    req.params.id,
    { $push: { messages: { $each: normalizedMessages } } },
    { new: true }
  );

  res.json(chat);
};

const deleteChat = async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);  
    res.json({ message: "Chat deleted" });
};  

module.exports = {
  createChat,
  getChats,         
  getChatById,
 updateChat,
 deleteChat
};  