import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";   
import Chat from "../component/chat";
import CodeEditor from "../component/Editor"; 
import Preview from "../component/preview";
import { useChat } from "../hooks/usechat";
import { ArrowRight, Menu } from "lucide-react";

const CodeGen = () => {
  const { code } = useChat();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-[#0f172a] overflow-hidden text-white">
      
      <div className="shrink-0">
         <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* Floating Toggle Button (Alternative if Navbar doesn't have it) */}
        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            className="absolute left-2 top-2 z-50 p-2 bg-blue-600 rounded-full hover:bg-blue-500 shadow-lg md:hidden"
          >
          <ArrowRight size={20} color="white" />
          </button>
        )}

        {/* Sidebar Wrapper */}
        <div
          className={`
            transition-all duration-300 ease-in-out
            border-r border-gray-800 overflow-hidden
            ${sidebarOpen ? "w-64" : "w-0"}
          `}
        >
          {/* Internal container with fixed width to prevent text squishing during animation */}
          <div className="w-64 h-full">
           <Sidebar 
  setSidebarOpen={setSidebarOpen}/>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-1 overflow-hidden">
          {/* Chat Section */}
          <div className="w-1/3 border-r border-gray-800 flex flex-col min-w-[300px]">
            <Chat />
          </div>

          {/* Editor Section */}
          <div className="w-1/3 border-r border-gray-800 flex flex-col min-w-[300px]">
            <CodeEditor code={code} />
          </div>

          {/* Preview Section */}
          <div className="w-1/3 flex flex-col min-w-[300px]">
            <Preview code={code} />
          </div>
        </div>

      </div>
    </div>
  );
}; 

export default CodeGen;