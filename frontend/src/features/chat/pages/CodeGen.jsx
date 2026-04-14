import Navbar from "../component/Navbar";
import Chat from "../component/chat";
import CodeEditor from "../component/Editor";
import Preview from "../component/preview";
import { useChat } from "../hooks/usechat";

const CodeGen = () => {
  const { code } = useChat();

  return (
    <div className="h-[100vh] flex flex-col bg-[#0f172a] overflow-hidden">
      
      {/* Navbar */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 flex-1 overflow-hidden">
        
        {/* Chat */}
        <div className="border-r border-gray-800 overflow-auto">
          <Chat />
        </div>

        {/* Editor */}
        <div className="border-r border-gray-800 overflow-auto">
          <CodeEditor code={code} />
        </div>

        {/* Preview */}
        <div className="overflow-auto">
          <Preview code={code} />
        </div>

      </div>
    </div>
  );
};

export default CodeGen;