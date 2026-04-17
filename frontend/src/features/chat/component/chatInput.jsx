import { useState } from "react";
import { useChat } from "../hooks/usechat";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { sendMessage, loading } = useChat();

  const handleSend = () => {
    if (!input.trim()) return; // empty message block
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 p-3 border-t border-gray-700">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} // ✅ yaha hona chahiye
        placeholder="Ask SigmaGPT..."
        className="flex-1 bg-gray-800 p-2 rounded"
      />

      <button
        onClick={handleSend}
        className="bg-indigo-500 px-4 rounded"
        disabled={loading}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;