import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-800">
          FOOD<span className="text-green-500">CTRL</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-gray-900">MAP</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">INVENTORY</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">DONATED FOOD</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">LEARN MORE</a>
      </div>

      {/* Authentication Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => {
          navigate("/signin")
        }}>Login</button>
        <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100" onClick={
          (() => {
            navigate("/signup")
          })
        }>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
