import Editor from "@monaco-editor/react";
import { useState } from "react";

const CodeEditor = ({ code }) => {
  const [tab, setTab] = useState("html");

  return (
    <div className="h-screen flex flex-col">
      <div className="flex gap-2 p-2 bg-gray-900 text-white">
        {["html", "css", "js"].map((t) => (
          <button key={t} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
     <div className="flex-1">
        <Editor
          height="95%"
          theme="vs-dark"
          language={tab}
          value={code[tab]}
       />
     </div>
      
    </div>
  );
};
export default CodeEditor;