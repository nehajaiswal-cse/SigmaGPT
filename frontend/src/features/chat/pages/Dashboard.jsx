import { useNavigate } from "react-router";
import logo from "./Toto-logo.png";

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* Background Logo */}
      <img
        src={logo}
        alt="bg-logo"
        className="absolute inset-0 w-full h-90vh object-cover opacity-5 pointer-events-none"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center">

        {/* Heading */}
        <h1 className="text-5xl font-bold flex items-center justify-center gap-3 mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
            WELCOME TO TOTO!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Generate, fix, and improve your code with the power of AI — faster, smarter, better 🚀
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* Code Generation */}
          <div
            onClick={() => navigate("/codegen")}
            className="group cursor-pointer p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-105 hover:border-indigo-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-indigo-400">
              ⚡ Code Generation
            </h2>
            <p className="text-gray-400 text-sm">
              Turn your ideas into working code instantly using AI
            </p>
            <p className="mt-4 text-xs text-indigo-300 opacity-0 group-hover:opacity-100 transition">
              Click to start →
            </p>
          </div>

          {/* Code Correction */}
          <div
            onClick={() => navigate("/codefix")}
            className="group cursor-pointer p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-105 hover:border-green-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-green-400">
              🛠 Code Correction
            </h2>
            <p className="text-gray-400 text-sm">
              Detect bugs and improve your code quality instantly
            </p>
            <p className="mt-4 text-xs text-green-300 opacity-0 group-hover:opacity-100 transition">
              Click to fix →
            </p>
          </div>

          {/* About Us (Now clickable like others) */}
          <div
            onClick={() => navigate("/about")}
            className="group cursor-pointer p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-105 hover:border-yellow-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-yellow-400">
              🚀 About Us
            </h2>
            <p className="text-gray-400 text-sm">
              Learn more about Toto and how it helps developers grow
            </p>
            <p className="mt-4 text-xs text-yellow-300 opacity-0 group-hover:opacity-100 transition">
              Know more →
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;