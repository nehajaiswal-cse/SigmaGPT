import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [code, setCode] = useState({ html: "", css: "", js: "" });
   const [currentChatId, setCurrentChatId] = useState(null);

  return (
    <ChatContext.Provider
      value={{ messages, setMessages, loading, setLoading, error, setError, code, setCode, currentChatId, setCurrentChatId }}
    >
      {children}
    </ChatContext.Provider>
  );
};


