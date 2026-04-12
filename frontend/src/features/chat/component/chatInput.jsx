import { useState } from "react";
import { useChat } from "../hooks/usechat";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { sendMessage, loading } = useChat();

  return (
    <div className="flex gap-2 p-3 border-t border-gray-700">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask SigmaGPT..."
        className="flex-1 bg-gray-800 p-2 rounded"
      />
      <button
        onClick={() => {
          sendMessage(input);
          setInput("");
        }}
        className="bg-indigo-500 px-4 rounded"
        disabled={loading}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;