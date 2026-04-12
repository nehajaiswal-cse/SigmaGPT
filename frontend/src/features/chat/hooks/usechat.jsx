import { useContext } from "react";
import{generateCode} from "../service/chatapi"

import {ChatContext} from "../chatContext"

export const useChat = () => {
     const context = useContext(ChatContext)
     const {messages,setMessages,loading,setLoading,error, setError,code,setCode} = context;
  
    const sendMessage = async (text) => {
     if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);

    try {
      setLoading(true);
      const res = await generateCode(text);
      console.log("AI Response:", res);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.reply || "Here is the generated code." },
      ]);

      setCode({
        html: res.code?.html || "<h1>Hello World</h1>",
        css: res.code?.css || "",
        js: res.code?.js || "",
      });
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
    return { messages, sendMessage, loading, error, code };
};
