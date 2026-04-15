import { useContext } from "react";
import{generateCode} from "../service/chatapi"

import {ChatContext} from "../chatContext"
import { createChat, updateChat } from "../service/chatHistoryapi";

export const useChat = () => {
     const context = useContext(ChatContext)
     const {messages,setMessages,loading,setLoading,error, setError,code,setCode,currentChatId,setCurrentChatId} = context;
  
    
    const cleanReply = (text) => {
       if (!text) return "Code generated successfully";
      return text
       .replace(/```[\s\S]*?```/g, "")
      .replace(/\n\s*\n/g, "\n")
      .trim();
   };
  
   const sendMessage = async (text) => {
  if (!text.trim()) return;

  const userMsg = { role: "user", content: text };
  setMessages((prev) => [...prev, userMsg]);

  try {
    setLoading(true);

    const res = await generateCode(text);
    const replyText = cleanReply(res.reply);

    const aiMsg = { role: "ai", content: replyText }; // ✅ FIXED

    setMessages((prev) => {
      const updated = [...prev, aiMsg];

      if (!currentChatId) {
        createChat(updated).then((chat) => {
          setCurrentChatId(chat.data._id);
        });
      } else {
        updateChat(currentChatId, [userMsg, aiMsg]);
      }
      console.log("Updated Messages:", updated);
      return updated;
    });

    setCode({
      html: res.code?.html || "<h1>Hello World</h1>",
      css: res.code?.css || "",
      js: res.code?.js || "",
    });

  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  return { messages, sendMessage, loading, error, code };
};
