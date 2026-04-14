const Sidebar = ({ setSidebarOpen }) => {
  // Example dummy data
  const chats = ["Project Alpha", "Lunch Plans", "React Debugging", "Vacation 2026"];

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="h-12 flex items-center justify-between px-3 border-b border-gray-800 shrink-0">
        <span className="font-semibold text-sm uppercase tracking-wider text-gray-400">
          Chat History
        </span>

        <button
          onClick={() => setSidebarOpen(false)}
          className="text-xs px-2 py-1 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-200"
        >
          Close
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
        {chats.map((chat, index) => (
          <div 
            key={index} 
            className="p-3 text-sm rounded-md hover:bg-gray-800 cursor-pointer truncate"
          >
            {chat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;