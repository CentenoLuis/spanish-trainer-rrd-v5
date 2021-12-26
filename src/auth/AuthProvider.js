import React from "react";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = (userCredentials, fromLocation) => {
    setUser({ name: "luis", role: "admin", email: "luis@gmail.com" });
    if (fromLocation) {
      history.push(fromLocation);
    }
  };
  const logout = () => setUser(null);

  const isLogged = () => !!user;
  const hasRole = (role) => role && user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
