import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


// Create the AuthContext
const AuthContext = createContext();

// Base URL for the authentication API
const AUTH_API_URL = "http://192.168.43.221:8000/";

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
    const [loggedInName, setLoggedInName] = useState('');
    const [loggedInId, setLoggedInId] = useState('');


  

    // Function to handle user signup
    const setUser = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}signup`, user);
            return response;
        } catch (error) {
            return error.response || { status: 500, message: 'Unknown error occurred' };
        }
    };

    // Function to handle user login
    const getUser = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}api/v1/users/token/client/`, user);
            console.log(response);
            
               localStorage.setItem("token", response.data.
                access);
    
            return response;
        } catch (error) {
            return error.response || { status: 500, message: 'Unknown error occurred' };
        }
    };
    const getInfo = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}api/v1/auth/token/`, user);
            console.log(response);
            
               localStorage.setItem("token", response.data.
                access);
    
            return response;
        } catch (error) {
            return error.response || { status: 500, message: 'Unknown error occurred' };
        }
    };
    return (
        <AuthContext.Provider
            value={{
                setUser,
                getUser,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use AuthContext in components
export const useAuthContext = () => {
    return useContext(AuthContext);
};
