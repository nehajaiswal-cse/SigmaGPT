import React, { useState } from "react";
import {useNavigate,Link} from "react-router";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import{useAuth} from "../hooks/useAuth";
import Loader from "../../../features/Loader";

export default function LoginPage() {
  const{loading,handleLogin} = useAuth();
  const navigate=useNavigate();

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
      await handleLogin({email,password})
      navigate("/");
    } catch(err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  if(loading){
    return(<main><Loader text="Logging you in..." /></main>)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950 px-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-white transition-all duration-300">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Toto - Your Coding Assistant!
            </span>
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Build smarter. Debug faster.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
            onChange={(e)=>{setPassword(e.target.value)}}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>
            <span className="hover:text-white cursor-pointer transition">
              Forgot password?
            </span>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full py-2.5 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span className="text-indigo-400 hover:underline cursor-pointer">
            <Link to={"/register"}>Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}