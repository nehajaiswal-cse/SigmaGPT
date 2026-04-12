import { useAuth } from "../../auth/hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-[#020617] border-b border-gray-800 text-white">
      <h1 className="text-xl font-bold text-indigo-500">Toto Coding Assistant</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">{user?.email}</span>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;