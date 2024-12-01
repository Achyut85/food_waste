import React, { useState , useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainApp from "./pages/MainApp";
import Donation from "./components/Donation";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserApp from "./pages/UserApp";
import TransactionHistory from "./components/TransactionHistory";
import UserProfile from "./components/UserProfile";
import FoodMenu from "./components/FoodMenu";
import refreshAccessToken from "./components/RefreshHandler";
import Inventories from "./components/Inventories";



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
   
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 600000); 

    return () => clearInterval(interval);
  }, []);



  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/signin" />;
  };
   console.log(isAuthenticated)
  return (
    <div className="full">
       
      

      <Routes>
        {/* Redirect root to the sign-in page */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Public routes */}
        <Route path="/signin" element={<SignIn setIsAuthenticated = {setIsAuthenticated}/>} />
        <Route path="/signup" element={<Signup/>} />

        {/* Private routes */}
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserApp />
            </PrivateRoute>
          }
        />
          
          <Route
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/user"
          element={
            <PrivateRoute>
              <Inventories/>
            </PrivateRoute>
          }
        /> */}
      </Routes>

      
    </div>
  );
};

export default App;
