import{useEffect,useState} from "react";
import { getChats ,getChatById} from "../service/chatHistoryapi";


const Sidebar = ({ setSidebarOpen,setMessages, setCurrentChatId, currentChatId }) => {
  const [chats, setChats] = useState([]);

   useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
  try {
    const res = await getChats();
    console.log("Loaded Chats:", res.data);
    setChats(res.data);
  } catch (err) {
    console.error("CHAT LOAD ERROR:", err.response?.data || err.message);
  }
};

   const openChat = async (id) => {
    const res = await getChatById(id);
    console.log("Opened Chat:", res.data);
    setMessages(res.data.messages);
    setCurrentChatId(id);
  };

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
        {chats.map((chat) => (
          <div 
            key={chat.id}
            onClick={()=>openChat(chat._id)}
            className="p-3 text-sm rounded-md hover:bg-gray-800 cursor-pointer truncate"
          >
            {chat.title || "Untitled Chat"} {/* Fallback if title is missing */ }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;