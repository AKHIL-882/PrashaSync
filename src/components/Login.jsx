import { FaGoogle, FaApple, FaPhone } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-10">
        <h1 className="text-3xl font-bold mb-6 ">LOGO</h1>
        <h2 className="text-xl font-bold mb-2">Welcome to PrashaSync</h2>
        <p className="text-gray-600 text-center font-bold mb-6">
          Manage patients, track progress, and streamline appointments—all in one place.
        </p>

        <div className="w-full max-w-sm">
          <label className="block text-gray-700 text-sm font-bold mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your mail address"
            className="w-full p-2 border border-gray-300 rounded mb-4 font-bold"
          />
          <button className="w-full bg-black text-white py-2 rounded border border-black font-bold">
            Continue
          </button>

          <p className="text-center text-gray-600 my-4 font-bold">
            Already have an account? <span className="text-black cursor-pointer">Log in</span>
          </p>

          {/* Social Login Buttons */}
          <button className="flex items-center w-full border border-black py-2 rounded mb-2 font-bold">
            <FaPhone className="ml-3" />
            <span className="flex-grow text-center">Continue with Phone</span>
          </button>
          <button className="flex items-center w-full border border-black py-2 rounded mb-2 font-bold">
            <FaGoogle className="ml-3" />
            <span className="flex-grow text-center">Continue with Google</span>
          </button>
          <button className="flex items-center w-full border border-black py-2 rounded font-bold">
            <FaApple className="ml-3" />
            <span className="flex-grow text-center">Continue with Apple</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-gray-500 text-sm font-bold">
          <span>Terms of Use</span> | <span>Privacy Policy</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-gray-200 flex justify-center items-center p-6">
        <div className="w-3/4 h-3/4 bg-gray-300 border border-gray-400 flex items-center justify-center">
          <span className="text-gray-500 font-bold">Image Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
