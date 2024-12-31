/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../helpers/apiClient";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState({ isAuthenticated: false, role: null });

  const login = (role) => setUser({ isAuthenticated: true, role });
  const logout = () => setUser({ isAuthenticated: false, role: null });

  const fetchCurrentUser = async () => {
    try {
      const response = await apiClient("/auth/decode", "GET", {}, null, true);
      let newUser = null;
      if (response.error) {
        newUser = {
          isAuthenticated: false,
          role: null,
        };
      } else {
        newUser = {
          isAuthenticated: true,
          role: response.data?.roles[0].name,
        };
      }
      setUser(newUser);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    if (!["/login", "/register"].includes(location.pathname)) {
      fetchCurrentUser();
    }
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
