import { useNavigate } from "react-router";
import logo from "../component/Toto logo.jpeg";

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Logo */}
      <img
        src={logo}
        alt="bg-logo"
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-16">
        
        {/* Title */}
        <div className="mt-10">
          <h1 className="text-3xl font-bold">
            Welcome to Toto 🚀
          </h1>
        </div>

        {/* 🔥 LEFT SIDE CARDS */}
        <div className="flex flex-col gap-6 mt-16 w-[320px]">
          
          {/* Code Generation */}
          <div
            onClick={() => navigate("/codegen")}
            className="cursor-pointer  mb-10 p-8 bg-[#1e293b]/80 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-indigo-400">
              Code Generation
            </h2>
            <p className="text-gray-400">
              Generate code using AI from your prompt
            </p>
          </div>

          {/* Code Correction */}
          <div
            onClick={() => navigate("/codefix")}
            className="cursor-pointer p-8 bg-[#1e293b]/80 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-400">
              Code Correction
            </h2>
            <p className="text-gray-400">
              Fix bugs and improve your code
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;