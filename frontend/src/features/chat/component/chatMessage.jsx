const ChatMessage = ({ msg }) => {
  return (
    <div
      className={`p-3 rounded-lg max-w-[75%] ${
        msg.role === "user"
          ? "bg-indigo-600 self-end"
          : "bg-gray-700 self-start"
      }`}
    >
      {msg.content}
    </div>
  );
};
export default ChatMessage;