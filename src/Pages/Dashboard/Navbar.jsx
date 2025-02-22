import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then(() => {
      console.log("Logout successful.");
    });
  };
  return (
    <nav className="bg-red-400 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Your Task</h1>

        {/* Buttons */}
        <div className="flex gap-4">
          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition inline-flex items-center gap-2"
            >
              Logout <MdLogout />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
