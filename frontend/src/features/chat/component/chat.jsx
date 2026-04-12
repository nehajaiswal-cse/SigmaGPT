
import { useChat } from "../hooks/usechat";
import ChatMessage from "./chatMessage";
import ChatInput from "./chatInput";

const Chat = () => {
  const { messages, loading, error } = useChat();

  return (
    <div className="flex flex-col h-full bg-[#0f172a] text-white">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <p className="text-gray-400">Start generating code 🚀</p>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} msg={msg} />
        ))}

        {loading && <p className="text-gray-400">AI typing...</p>}
        {error && <p className="text-red-400">{error}</p>}
      </div>

      <ChatInput />
    </div>
  );
};
export default Chat;