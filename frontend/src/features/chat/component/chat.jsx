import { useChat } from "../hooks/usechat";
import ChatMessage from "./chatMessage";
import ChatInput from "./chatInput";

const Chat = () => {
  const { messages, sendMessage, loading, error } = useChat();
 const prompts = [
    "Generate a button",
    "Generate a form",
    "Responsive navbar code",
    "Design a calculator"
  ];

  return (
    <div className="flex flex-col h-full bg-[#0f172a] text-white">
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">

            {/* Welcome */}
            <h2 className="text-xl font-semibold mb-2">
              Welcome to Toto AI 
            </h2>
            <p className="text-gray-400 mb-6">
              Start by typing a prompt or choose one below
            </p>

            {/* Prompt Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg">
              {prompts.map((prompt, i) => (
                <div
                  key={i}
                  onClick={() => sendMessage(prompt)}
                  className="cursor-pointer p-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 transition"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        )}



        {messages.map((msg, i) => (
          <ChatMessage key={i} msg={msg} />
        ))}

        {loading && <p className="text-gray-400">AI typing...</p>}
        {error && <p className="text-red-400">{error}</p>}
      </div>

      {/* FIXED INPUT */}
      <div className="flex-shrink-0 border-t border-gray-700 bg-[#020617]">
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;