import logo from "./Toto-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"></div>

      {/* Content Card */}
      <div className="relative z-10 max-w-3xl w-full p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Toto Logo"
          className="w-16 h-16 mx-auto mb-4"
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
          About Toto
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          Toto is an AI-powered platform designed to simplify coding for developers.
          It helps you generate, debug, and optimize code using advanced AI models.
        </p>

        <p className="text-gray-400 mb-4 leading-relaxed">
          Whether you're a beginner learning programming or an experienced developer
          building complex applications, Toto assists you in writing efficient and
          error-free code.
        </p>

        <p className="text-gray-500 mb-6 leading-relaxed">
          Our goal is to make development faster, smarter, and more accessible
          for everyone.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-indigo-400 font-semibold">⚡ Fast</h3>
            <p className="text-gray-400 text-sm">
              Generate code instantly with AI
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-green-400 font-semibold">🛠 Reliable</h3>
            <p className="text-gray-400 text-sm">
              Fix bugs and improve code quality
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-pink-400 font-semibold">🚀 Smart</h3>
            <p className="text-gray-400 text-sm">
              Learn and grow with AI assistance
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;