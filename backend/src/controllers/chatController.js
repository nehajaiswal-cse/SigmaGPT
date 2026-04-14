const Chat= require("../models/chatmodel.js")

 const createChat = async (req, res) => {
  const { messages } = req.body;

  const chat = await Chat.create({
    userId: req.user.id,
    title: messages[0]?.content?.slice(0, 30) || "New Chat",
    messages,
  });

  res.json(chat);
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

  const chat = await Chat.findByIdAndUpdate(
    req.params.id,
    {
      $push: { messages: { $each: messages } },
    },
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