import Editor, { loader } from "@monaco-editor/react";
import { useState } from "react";
import * as monaco from "monaco-editor";

// 1. Vite-specific worker imports
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

// 2. Monaco Environment Configuration (Component ke BAHAR rakhein)
if (typeof window !== "undefined") {
  window.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json') return new jsonWorker();
      if (label === 'css' || label === 'scss' || label === 'less') return new cssWorker();
      if (label === 'html' || label === 'handlebars' || label === 'razor') return new htmlWorker();
      if (label === 'typescript' || label === 'javascript') return new tsWorker();
      return new editorWorker();
    },
  };

  // Loader ko local monaco instance use karne ke liye kahein
  loader.config({ monaco });
}

const CodeEditor = ({ code, setCode }) => {
  const [tab, setTab] = useState("html");

  // State update logic
  const handleEditorChange = (value) => {
    // Blinking control: tab change ke waqt undefined value ko check karein
    if (value !== undefined) {
      setCode((prev) => ({ ...prev, [tab]: value }));
    }
  };

  return (
    <div id="editor-container" className="h-screen flex flex-col overflow-hidden">
      {/* Pane Header */}
      <div className="pane-header flex justify-between items-center p-2 bg-gray-800 text-white shadow-md">
        <h3 className="text-sm font-semibold">
          <i className="fa-solid fa-code mr-2"></i> Code 
        </h3>
        <div className="header-actions flex gap-2">
          <button id="toggle-split-view-btn"><i className="fa-solid fa-columns"></i></button>
          <button className="fullscreen-btn"><i className="fa-solid fa-expand"></i></button>
        </div>
      </div>

      <div className="editor-content flex flex-1 overflow-hidden bg-gray-900">
        <div className="code-area flex-1 flex flex-col border-r border-gray-700">
          {/* Custom Tabs */}
          <div className="code-header flex p-1 bg-gray-900 border-b border-gray-800">
            <div className="tabs flex gap-2">
              {["html", "css", "js"].map((t) => (
                <button 
                  key={t} 
                  onClick={() => setTab(t)}
                  className={`px-4 py-1 uppercase text-[10px] font-black tracking-widest transition-all ${
                    tab === t 
                      ? "text-blue-400 border-b-2 border-blue-400 bg-gray-800" 
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Editor
              height="100%"
              theme="vs-dark"
              language={tab === "js" ? "javascript" : tab}
              value={code[tab]}
              onChange={handleEditorChange}
              path={`file-${tab}`} // Unique path switch blinking ko rokta hai
              options={{
                automaticLayout: true,
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                fixedOverflowWidgets: true // Widgets ko container ke andar rakhta hai
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;