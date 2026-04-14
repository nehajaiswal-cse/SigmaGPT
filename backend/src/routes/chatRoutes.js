// routes/chatRoutes.js
const express = require('express');
const chatController =require("../controllers/chatController")
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post("/",authMiddleware.authUser, chatController.createChat);
router.get("/", authMiddleware.authUser, chatController.getChats);
router.get("/:id", authMiddleware.authUser, chatController.getChatById);
router.put("/:id", authMiddleware.authUser, chatController.updateChat);
router.delete("/:id", authMiddleware.authUser,  chatController.deleteChat);

module.exports = router;