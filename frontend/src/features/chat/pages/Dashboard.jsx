import Navbar from "../component/Navbar";
import Chat from "../component/chat";
import CodeEditor from "../component/Editor";
import Preview from "../component/preview";
import { useChat } from "../hooks/usechat";

const Dashboard = () => {
  const { code } = useChat();

  return (
    <div className="h-screen flex flex-col bg-[#0f172a]">
      <Navbar />

      <div className="flex flex-1 grid grid-cols-3">
        <div className="border-r border-gray-800">
          <Chat />
        </div>

        <div className="border-r border-gray-800">
          <CodeEditor code={code} />
        </div>

        <div>
          <Preview code={code} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;