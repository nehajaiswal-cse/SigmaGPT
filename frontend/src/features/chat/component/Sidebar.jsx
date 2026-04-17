import{useEffect,useState} from "react";
import { getChats ,deleteChat,getChatById} from "../service/chatHistoryapi";
import { useChat } from "../hooks/usechat";

const Sidebar = ({ setSidebarOpen }) => {
  const { chats,setChats,setMessages,setCurrentChatId} = useChat();
   useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
  try {
    const res = await getChats();
    setChats(res.data);
  } catch (err) {
    console.error("CHAT LOAD ERROR:", err.response?.data || err.message);
  }
};

   const openChat = async (id) => {
    const res = await getChatById(id);
    setMessages(res.data.messages);
    setCurrentChatId(id);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation(); // 🔥 important (chat open na ho)

    try {
      await deleteChat(id);

      // 🔥 instant UI update
      setChats((prev) => prev.filter((chat) => chat._id !== id));
    } catch (err) {
      console.error("DELETE ERROR:", err.response?.data || err.message);
    }
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
        {(chats || []).map((chat) => (
          <div 
            key={chat._id}
            onClick={()=>openChat(chat._id)}
            className="p-3 text-sm rounded-md hover:bg-gray-800 cursor-pointer truncate"
          > 
            <div className="flex-1 truncate">
              <p>{chat.title}</p>
              <small className="text-gray-400">
                {new Date(chat.updatedAt).toLocaleString()}
              </small>
            </div>

            <button
              onClick={(e) => handleDelete(e, chat._id)}
              className="text-red-400 hover:text-red-600 text-xs ml-2"
            >
            ✕
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;