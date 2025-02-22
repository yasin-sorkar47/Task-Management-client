import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { user, setUser, googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      // Google Sign-In
      const result = await googleSignIn();
      const user = result.user;

      // Store user info in db
      const userInfo = {
        userID: Date.now(),
        userEmail: user?.email,
        displayName: user?.displayName,
      };
      const res = await axios.post(
        "https://job-task-server-two-lime.vercel.app/users",
        userInfo
      );
      console.log(res);
    } catch (error) {
      console.error("Google Sign-In failed:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please sign in to access the app
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 rounded-lg flex items-center justify-center gap-3 border border-gray-300 shadow-md bg-white hover:bg-gray-100 transition duration-300"
        >
          <img
            src="https://img.icons8.com/?size=48&id=17949&format=png"
            alt="Google Logo"
            className="w-6 h-6"
          />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
