import axios from "axios";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils/authUtils";
import { useAuthContext } from "../components/AuthContex"; // Corrected import
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({setIsAuthenticated}) => {
  const { getUser, setLoggedInId, setLoggedInName } = useAuthContext(); // Corrected usage
  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { email, password } = signinInfo;

  const handleInput = (name) => (e) => {
    setSigninInfo({ ...signinInfo, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError("Email and Password are required");
    }
    try {
      const result = await getUser(signinInfo);
      console.log(result)
 
      const {  message, error ,jwtToken } = result.data;
      if (result.status === 200) {
        setIsAuthenticated(true);
        handleSuccess(message);
        navigate('/user');
        console.log("navigate");
      
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      } else if (result.status !== 200) {
        handleError(message);
      }
    } catch (error) {
      handleError(error.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full h-full mt-2">
        <h2 className="text-2xl font-bold text-green-700 mb-4 ">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleInput('email')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInput('password')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700"
         
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    
    </div>
  );
};

export default SignIn;
