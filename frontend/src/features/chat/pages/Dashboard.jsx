import { useNavigate } from "react-router";
import logo from "./Toto logo.jpeg";

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
      <div className="relative z-10 h-full px-16">
        
        {/* Title */}
        <div className="mt-10">
          <h1 className="text-3xl  flex items-center gap-3 font-bold">
            Welcome to Toto <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          </h1>
        </div>

        {/* LEFT SIDE CARDS */}
        <div className="flex flex-col gap-6 mt-16 w-[320px]">
          
          {/* Code Generation */}
          <div
            onClick={() => navigate("/codegen")}
            className="cursor-pointer p-8 bg-[#1e293b]/80 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition"
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

        {/* TOP RIGHT - ABOUT US */}
        {/* TOP RIGHT - ABOUT + CONTACT */}
<div className="absolute top-10 right-16 max-w-sm ">

  {/* About Us */}
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-yellow-400 mb-2">
      About Toto
    </h2>
    <p className="text-gray-300 mb-4 leading-relaxed">
              Toto is an AI-powered platform designed to help developers write,
              debug, and improve their code effortlessly.
            </p>

            <p className="text-gray-400 mb-4 leading-relaxed">
              With intelligent code generation and real-time bug fixing, Toto
              simplifies development workflows and boosts productivity.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Whether you're a beginner or an experienced developer, Toto helps
              you build faster, learn better, and code smarter.
            </p>
  </div>

  {/* Contact Us (Below About) */}
  <div>
    <h2 className="text-2xl font-bold text-pink-400 mb-2">
      Contact Us
    </h2>
    <p className="text-gray-400 text-sm">
      📧 support@toto.ai
    </p>
    <p className="text-gray-400 text-sm">
      📞 +91 98765 43210
    </p>
  </div>

</div>

      </div>
    </div>
  );
};

export default DashboardHome;