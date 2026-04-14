import { useAuth } from "../../auth/hooks/useAuth";
import logo from "./Toto logo.jpeg";
import Loader from "../../../features/Loader";

const Navbar = () => {
  const { loading,handleLogout,user } = useAuth();
 
  if(loading){
    return(<main><Loader /></main>)
  }
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-[#020617] border-b border-gray-800 text-white">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <h1 className="text-xl font-bold text-indigo-500">Toto - Your Coding Assistant!</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;