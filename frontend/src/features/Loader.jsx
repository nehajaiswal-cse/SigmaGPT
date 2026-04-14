const Loader = ({ text }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0f172a]">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* Glow Spinner */}
        <div className="relative">
          <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 blur-xl bg-indigo-500 opacity-30 rounded-full"></div>
        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm tracking-wide">
          {text}
        </p>

      </div>

    </div>
  );
};

export default Loader;